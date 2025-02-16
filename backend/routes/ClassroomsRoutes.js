const classroomModel = require("../models/classroomModel");

const router = require("express").Router();
router.post("/addClassroom", async (req, res) => {
    const { blockName, classroomName } = req.body;
    if (!blockName || !classroomName) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "please fill all field" })
    }
    const check_existing_classroom = await classroomModel.findOne({ classroomName: classroomName })
    if (check_existing_classroom) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "Classroom allready exist" })
    }
    await classroomModel.create({ blockName, classroomName })
    return res.send({
        message: "add successfully"
    })
})
router.get("/showClassroomData", async (req, res) => {
    try {
        const classrooms = await classroomModel.find({});
        res.status(200).json(classrooms);
    } catch (error) {
        res.status(500).send({ message: "Error fetching classroom data" });
    }
});
router.get("/getClassroom/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const classroom = await classroomModel.findById(id);
        if (!classroom) {
            return res.status(404).json({ message: "Classroom not found" });
        }
        res.status(200).json(classroom);
    } catch (error) {
        res.status(500).json({ message: "Error fetching classroom data" });
    }
});
router.put("/updateClassroom/:id", async (req, res) => {
    try {
        const id = req.params.id
        const classroom = await classroomModel.findByIdAndUpdate({
            _id: id
        }, {
            blockName: req.body.blockName,
            classroomName: req.body.classroomName
        })
        if (!classroom) {
            return res.status(404).json({
                message: "Classroom not found"
            });
        }
        res.status(200).json({
            message: "Classroom updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating classroom data"
        });
    }
});
router.delete("/deleteClassroom/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const classroom = await classroomModel.findByIdAndDelete(id);
        if (!classroom) {
            return res.status(404).json({
                message: "Classroom not found"
            });
        }
        res.status(200).json({
            message: "Classroom deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting classroom data"
        });
    }
}
);
module.exports = router;