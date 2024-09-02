const httpStatus = require("http-status")
const studentModel = require("../models/studentModel")

const router = require("express").Router()


///add student routes
router.post("/add_student" ,async(req ,res)=>{
    const {name , email , password , age , number , classes}= req.body
    if(!name || !email || !number || !password || !classes || !age){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all feild"})
    }

    const check_student = await studentModel.findOne({email:email})
    if(check_student){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Acccount allready exist"})
    }
    await studentModel.create({name , email, password , number , age , classes})
    res.send({
        message:"Add successfully"
    })
})

//show all student data
router.get("/show_student" , async(req ,res)=>{
    try {
        const student = await studentModel.find({})
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
})

// get student details by id
router.get("/get_student/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const student = await studentModel.findById({_id:id})
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
})


////update student details by id
router.put("/update_student/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const student = await studentModel.findByIdAndUpdate({_id:id} , {name:req.body.name , email:req.body.email , password:req.body.password  , age:req.body.age , number:req.body.number , classes:req.body.classes})
        res.status(200).json(student)
    } catch (error) {
        res.status({message:"error fetching"})
    }
})

// delete student data
router.delete("/delete_student/:id" , async(req , res)=>{
    try {
        const id = req.params.id
        const student = await studentModel.findByIdAndDelete({_id:id})
        res.status(200).json(student)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
})
module.exports = router