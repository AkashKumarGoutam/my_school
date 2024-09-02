const mongoose = require("mongoose")

const classroomSchema = new mongoose.Schema({
    classesName:{
        type:String,
        required:true
    },
    roomName:{
        type:String,
        required:true
    }
})

const classroomModel = mongoose.model("classrooms" , classroomSchema)

module.exports = classroomModel