const router = require("express").Router()
const httpStatus = require("http-status")
const assignClassesModel = require("../models/assignClassesModel")
const classroomModel = require("../models/classroomModel")
const teacherModel = require("../models/teacherModel")

//assing classess
router.post("/assign_classes" , async(req , res)=>{
    const { classes , teachers} = req.body

    if(!classes || !teachers){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fil all field"})
    }

    const check_timetable = await assignClassesModel.findOne({classes:classes})
    if(check_timetable){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:" timetable already exit "})
    }

    await assignClassesModel.create({classes , teachers})
    return res.send({message:"add time table successfully"})
})



// Get available classes and teachers
router.get("/get_available_classes_teachers", async (req, res) => {
    try {
        const assignedClasses = await assignClassesModel.find().select("classes teachers -_id");

        // Assuming classes and teachers are stored separately in a different collection
        const allClasses = await classroomModel.find(); // Replace with your Classroom model
        const allTeachers = await teacherModel.find(); // Replace with your Teacher model

        // Filter out assigned classes and teachers
        const availableClasses = allClasses.filter(
            classItem => !assignedClasses.some(assigned => assigned.classes === classItem.classesName)
        );
        const availableTeachers = allTeachers.filter(
            teacherItem => !assignedClasses.some(assigned => assigned.teachers === teacherItem.name)
        );

        return res.status(httpStatus.OK).send({
            availableClasses: availableClasses,
            availableTeachers: availableTeachers,
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Error fetching data" });
    }
});

///get all data from created timetable og assignclasses model 
router.get("/get_all_created_timetable" , async(req , res)=>{
    try {
        const timetables = await assignClassesModel.find({})
        res.status(200).json(timetables)
    } catch (error) {
        res.status(500).send({messsage:"fetching error"})        
    }
})
module.exports = router