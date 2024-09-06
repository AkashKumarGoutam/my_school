const httpStatus = require("http-status");
const adminModel = require("../models/adminModel");
const principalModel = require("../models/principalModel");
const teacherModel = require("../models/teacherModel");
const studentModel =require("../models/studentModel")
const jwt = require("jsonwebtoken")

const router = require("express").Router()

//////////////////////////////////////////////////////////////////////////////////                    admin                 ////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////                   end admin                              //////////////////////



///////////////////////////////////////////////////////////////////                      principal login                 /////////////////////////////////////////
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
        message:"Principal login Successfully",
        email:check_Principal.email
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

////////////////////////////////////////////////////////////////////////////////////////////                                end principal         ///////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////                           teacher routes            ////////////////////////////
router.post("/teacher_login" , async(req , res)=>{
    const{ email , password} = req.body
    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all feild"})
    }

    const check_teacher = await teacherModel.findOne({email:email})
    if(!check_teacher){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"account not exit"})
    }

    const token = jwt.sign({ username: check_teacher.username }, process.env.JWT_TEACHER_KEY, { expiresIn: "1h" });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    return res.send({
        message:"login successfull",
        email:check_teacher.email
    })
})
///////////////////protected teacher routes 
const verifyTeacher = async (req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.json({status: false , message:"no token available"})
        }
        const decoded = await jwt.verify(token , process.env.JWT_TEACHER_KEY);
        next();
        }
        catch(err){
            return res.json(err);
        }
}
///////////set route with middleware (verifyUser)///////
router.get('/verify_teacher' , verifyTeacher , (req,res)=>{
return res.json({status:true , message:"authorized"})
})


///////////////////////////////////////////////////////////////////////////////////////////////////                         end teacher               ///////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////                      Student Routes                 ////////////////////
router.post("/student_login" , async(req , res)=>{
    const {email , password} = req.body
    if(!email || !password){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all feild"})
    }
    const check_student = await studentModel.findOne({email:email})
    if(!check_student){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"account not exit"})
    }

    const token = jwt.sign({ username: check_student.username }, process.env.JWT_STUDENT_KEY, { expiresIn: "1h" });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    return res.send({
        message:"login successfull",
        email:check_student.email
    })
})

///////////////////protected student routes 
const verifyStudent = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ status: false, message: "No token available" });
        }
        const decoded = await jwt.verify(token, process.env.JWT_STUDENT_KEY);
        req.user = decoded;  // Attach the decoded info to req.user
        next();
    } catch (err) {
        return res.status(403).json({ status: false, message: "Unauthorized" });
    }
};

///////////set route with middleware (verifyUser)///////
router.get('/verify_student' , verifyStudent , (req,res)=>{
return res.json({status:true , message:"authorized"})
})
////////////////////////////////////////////////////////////


///fetch student detail on Student dashboard after student_login
router.get("/student_details", verifyStudent, async (req, res) => {
    try {
        const student = await studentModel.findOne({ username: req.user.username });
        if (!student) {
            return res.status(404).json({ status: false, message: "Student not found" });
        }
        res.json({ status: true, student });
    } catch (err) {
        res.status(500).json({ status: false, message: "Server error" });
    }
});



///////////////logout routes//////////////////
router.get("/logout" , (req, res)=>{
    res.clearCookie('token')
    return res.json({status : true})
})
 module.exports = router;