const httpStatus = require("http-status");
const adminModel = require("../models/adminModel");
const principalModel = require("../models/principalModel");

const router = require("express").Router()


router.post("/admin_login" , async(req , res)=>{
    const {email,password}= req.body;


    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST)
        .send({ message:"please fill all field"})
    }

    const check_user = await adminModel.findOne({email:email})
    console.log(check_user)
    if(!check_user){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Account not exit"})
    }

    return res.send({
        message:"Admin login successfully"
    })
})


////////principal login//////////////////////////////////
router.post("/principal_login" , async(req , res)=>{
    const {email , password} =req.body

    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Plase fill all field"})       
    }

    const check_Principal = await principalModel.findOne({email:email})
    if(!check_Principal){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Accound doesn't exist"})
    }
    return res.send({
        message:"Principal login Successfully"
    })

})
 module.exports = router;