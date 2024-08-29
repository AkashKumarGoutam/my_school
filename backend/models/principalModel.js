const mongoose = require("mongoose")

const principalSchema = new mongoose.Schema({
    name:{type :String , required : true},
    email:{type :String , required : true},
    password:{type :String , required : true},
    age:{type :String , required : true},
    number:{type :String , required : true}
})

const principalModel = mongoose.model("principals" , principalSchema)

module.exports=principalModel;