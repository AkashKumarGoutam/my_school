const router = require("express").Router();
const classesModel = require("../models/ClassesModels");
router.post("/addClass", async (req, res) => {
    const { className } = req.body;
    if (!className) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "please fill all field" })
    }
    const check_existing_class = await classesModel.findOne({ className: className })
    if (check_existing_class) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "Class allready exist" })
    }
    await classesModel.create({ className })
    return res.send({
        message: "add successfully"
    })
})
router.get("/showClassData", async (req, res) => {
    try {
        const classes = await classesModel.find({});
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).send({ message: "Error fetching class data" });
    }
});
router.get("/getClass/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const classes = await classesModel.findById(id);
        if (!classes) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching class data" });
    }
});
router.put("/updateClass/:id", async (req, res) => {
    try {
        const id = req.params.id
        const classes = await classesModel.findByIdAndUpdate({
            _id: id
        }, {
            className: req.body.className
        })
        if (!classes) {
            return res.status(404).json({
                message: "Class not found"
            });
        }
        res.status(200).json({
            message: "Class updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating class data"
        });
    }
} );
router.delete("/deleteClass/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const classes = await classesModel.findByIdAndDelete(id);
        if (!classes) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting class data" });
    }
} ); 
module.exports = router;