const router = require("express").Router();
const httpStatus = require("http-status");
const assignClassesModel = require("../models/assignClassesModel");
const classroomModel = require("../models/classroomModel");
const teacherModel = require("../models/teacherModel");
const subjectModel = require("../models/subjectModels");
const classesModel = require("../models/ClassesModels");

// Assign classes
router.post("/assign_classes", async (req, res) => {
    const { classes, teachers, subject, classroom, timing } = req.body;

    if (!classes || !teachers || !subject || !classroom || !timing) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "Please fill all fields" });
    }

    const check_timetable = await assignClassesModel.findOne({
        classes,
        timing
    });

    if (check_timetable) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "Timetable for this class at this time already exists" });
    }

    await assignClassesModel.create({ classes, teachers, subject, classroom, timing });
    return res.status(httpStatus.CREATED).send({ message: "Timetable added successfully" });
});

// Get available classes, teachers, classrooms, and subjects
router.get("/get_available_classes_teachers_classroom_subject", async (req, res) => {
    try {
        const assignedClasses = await assignClassesModel.find().select("classes teachers classroom subject timing -_id");

        const allClasses = await classesModel.find();
        const allTeachers = await teacherModel.find();
        const allSubjects = await subjectModel.find();
        const allClassrooms = await classroomModel.find();

        // Filter available classes, teachers, classrooms, and subjects
        const availableClasses = allClasses.filter(classItem => !assignedClasses.some(assigned => assigned.classes === classItem.className));
        const availableTeachers = allTeachers.filter(teacherItem => !assignedClasses.some(assigned => assigned.teachers === teacherItem.name));
        const availableClassrooms = allClassrooms.filter(classroomItem => !assignedClasses.some(assigned => assigned.classroom === classroomItem.classroomName));
        const availableSubjects = allSubjects.filter(subjectItem => !assignedClasses.some(assigned => assigned.subject === subjectItem.subjectName));

        return res.status(httpStatus.OK).send({ availableClasses, availableTeachers, availableSubjects, availableClassrooms });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Error fetching data", error });
    }
});

// Get all created timetables
router.get("/get_all_created_timetable", async (req, res) => {
    try {
        const timetables = await assignClassesModel.find({});
        res.status(httpStatus.OK).json(timetables);
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Fetching error" });
    }
});

module.exports = router;
