const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    blockName: {
        type: String,
        required: true
    },
    classroomName: {  
        type: String,
        required: true
    }
});

const classroomModel = mongoose.model("classrooms", classroomSchema);

module.exports = classroomModel;
