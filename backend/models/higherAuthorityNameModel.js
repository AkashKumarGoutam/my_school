const mongoose = require("mongoose")

const higherAuthorityNameSchema = new mongoose.Schema({
    name:{type :String , required : true},
    email:{type :String , required : true},
    password:{type :String , required : true},
    age:{type :String , required : true},
    number:{type :String , required : true},
    jobPosition:{type :String , required : true},
    education:{type :String , required : true},
})

const higherAuthorityNameModel = mongoose.model("higherAuthorityName" , higherAuthorityNameSchema)

module.exports=higherAuthorityNameModel;