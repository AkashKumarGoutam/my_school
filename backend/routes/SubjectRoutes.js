const router = require("express").Router();
const subjectModel = require("../models/subjectModels");
router.post("/addSubject", async (req, res) => {
    const { subjectName, subjectCode } = req.body;
    if (!subjectName || !subjectCode) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "please fill all field" })
    }
    const check_existing_subject = await subjectModel.findOne({ subjectName: subjectName })
    if (check_existing_subject) {
        return res.status(httpStatus.BAD_REQUEST)
            .send({ message: "Subject allready exist" })
    }
    await subjectModel.create({ subjectName, subjectCode })
    return res.send({
        message: "add successfully"
    })
})
router.get("/showSubjectData", async (req, res) => {
    try {
        const subjects = await subjectModel.find({});
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).send({ message: "Error fetching subject data" });
    }
});
router.get("/getSubject/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await subjectModel.findById(id);
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subject data" });
    }
} );
router.put("/updateSubject/:id", async (req, res) => {
    try {
        const id = req.params.id
        const subject = await subjectModel.findByIdAndUpdate({
            _id: id
        }, {
            subjectName: req.body.subjectName,
            subjectCode: req.body.subjectCode
        })
        if (!subject) {
            return res.status(404).json({
                message: "Subject not found"
            });
        }
        res.status(200).json({
            message: "Subject updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating subject data"
        });
    }
}
);
router.delete("/deleteSubject/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const subject = await subjectModel.findByIdAndDelete(id);
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting subject data" });
    }
});
module.exports = router;