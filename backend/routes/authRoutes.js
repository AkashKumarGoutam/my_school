const httpStatus = require("http-status");
const adminModel = require("../models/adminModel");
const principalModel = require("../models/principalModel");
const jwt = require("jsonwebtoken")

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

    const token = jwt.sign({ username: check_user.username }, process.env.JWT_ADMIN_KEY, { expiresIn: "1h" });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    return res.send({
        message:"Admin login successfully"
    })
})

   ////admin  verifyUser middleware///////
   const verifyUser = async (req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.json({status: false , message:"no token available"})
        }
        const decoded = await jwt.verify(token , process.env.JWT_ADMIN_KEY);
        next();
        }
        catch(err){
            return res.json(err);
        }
}
///////////set route with middleware (verifyUser)///////
router.get('/verify_admin' , verifyUser , (req,res)=>{
return res.json({status:true , message:"authorized"})
})

/////////////////////////end admin//////////////////////



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

    const token = jwt.sign({ username: check_Principal.username }, process.env.JWT_PRINCIPAL_KEY, { expiresIn: "1h" });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
    return res.send({
        message:"Principal login Successfully"
    })

})

///////////////////protected principal routes 
const verifyPrincipal = async (req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.json({status: false , message:"no token available"})
        }
        const decoded = await jwt.verify(token , process.env.JWT_PRINCIPAL_KEY);
        next();
        }
        catch(err){
            return res.json(err);
        }
}
///////////set route with middleware (verifyUser)///////
router.get('/verify_principal' , verifyPrincipal , (req,res)=>{
return res.json({status:true , message:"authorized"})
})


   



///////////////logout routes//////////////////
router.get("/logout" , (req, res)=>{
    res.clearCookie('token')
    return res.json({status : true})
})
 module.exports = router;