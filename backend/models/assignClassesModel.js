const mongoose = require("mongoose")

const assignClassesSchema = new mongoose.Schema({
    classes : {
        type:String,
        required :true
    },
    teachers : {
        type:String,
        required :true
    }
})

const assignClassesModel = mongoose.model("assignClasses" , assignClassesSchema)

module.exports = assignClassesModel