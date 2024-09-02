const httpStatus = require("http-status");
const classroomModel = require("../models/classroomModel");

const router = require("express").Router()

/////add data
router.post("/add_classroom" , async(req , res)=>{
    const {classesName , roomName}=req.body
    if(!classesName || !roomName){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all feild"})
    }

    const check_classroom = await classroomModel.findOne({classesName:classesName})
    if(check_classroom){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"classess already exist"})
    }

    await classroomModel.create({classesName, roomName})
    res.send({message:"add classes successfully"})
})


///get all data 
router.get("/show_classroom" , async(req , res)=>{
    try {
        const classroom = await classroomModel.find({})
        if(classroom){
            res.status(200).json(classroom)
        }
    } catch (error) {
        res.status(500).send({message:"fetching error"})        
    }
})
module.exports = router;