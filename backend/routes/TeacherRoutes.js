const httpStatus = require("http-status");
const teacherModel = require("../models/teacherModel");

const router = require("express").Router()

///add teacher details
router.post("/add_teacher" , async(req , res)=>{
    const{name , email , password , age , number} =req.body;
    if(!name || !email || !password || !age || !number){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Please Fill all field"})
    }

    const check_teacher = await teacherModel.findOne({email:email})
    if(check_teacher){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Account allready exist"})
    } 
    await teacherModel.create({name , email , password , age , number})
    return res.send({
        message:"add successfully"
    })
})

///show all teacher data
router.get("/getAll_teacher" , async(req , res)=>{
    try {
        const teacher = await teacherModel.find({});
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
})

///get teacher details by id
router.get("/get_TeacherDetail/:id" , async(req , res)=>{
   try {
    const id = req.params.id
    const teacher = await teacherModel.findById({_id:id})
    res.status(200).json(teacher)
   } catch (error) {
        res.status(500).send({message:"error fetching"})
   } 
})

//update teacher deatils by id
router.put("/update_TeacherDetails/:id", async(req , res)=>{
    try {
        const id=req.params.id
        const teacher = await teacherModel.findByIdAndUpdate({_id:id} , {name:req.body.name , email:req.body.email , password:req.body.password , age:req.body.age , number:req.body.number})
        if(!teacher){
            return res.status(404).send({message:"teacher not found"})
        }
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
})

///delete teacher data
router.delete("/delete_teacherDetails/:id" , async(req ,res)=>{
    try {
        const id = req.params.id
        const teacher = await teacherModel.findByIdAndDelete({_id:id})
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).send({message:"error fetching"})
    }
} )


module.exports=router