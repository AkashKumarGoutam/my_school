const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    classes:{
        type:String,
        required:true
    }
})

const studentModel = mongoose.model("students" , studentSchema)
module.exports=studentModel