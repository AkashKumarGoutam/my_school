const httpStatus = require("http-status");
const higherAuthorityNameModel = require("../models/higherAuthorityNameModel");

const router = require("express").Router()
//add higherAuthorityName
router.post("/addHigherAuthorityName" , async(req , res)=>{
    const {name , email, password , age , number , jobPosition , education} = req.body;
    if(!name || !email || !password || !age || !number || !jobPosition || !education){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all field"})
    }
    const check_existing_HigherAuthority = await higherAuthorityNameModel.findOne({email:email})
    if(check_existing_HigherAuthority){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Accound allready exist"})
    }

    await higherAuthorityNameModel.create({name , email , password , age , number , jobPosition , education})
    return res.send({
        message:"add successfully"
    })
})
 
//show all details
router.get("/show_all_higherAuthorityNameList" , async(req , res)=>{
    try {
        const higherAuthorityName = await higherAuthorityNameModel.find({});
        res.status(200).json(higherAuthorityName)
    } catch (error) {
        res.status(500).send({ message: "Error fetching Higher Authority Name data" });
    }
})


  // fetch Higher Authority Name data by id
  router.get("/getHigherAuthorityName/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const higherAuthorityName = await higherAuthorityNameModel.findById(id);
        if (!higherAuthorityName) {
            return res.status(404).json({ message: "Higher Authority Name not found" });
        }
        res.status(200).json(higherAuthorityName);  // Send the fetched Higher Authority Name data as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Error fetching Higher Authority Name data" });
    }
});

////update Higher Authority Name data detail
router.put("/updateHigherAuthorityName/:id", async (req , res)=>{
    try {
      const id=req.params.id
      const higherAuthorityName = await higherAuthorityNameModel.findByIdAndUpdate({_id:id}, {name:req.body.name , email:req.body.email , password:req.body.password , age:req.body.age , number:req.body.number})
      if (!higherAuthorityName) {
        return res.status(404).json({ message: "Higher Authority Name not found" });
    }
    res.status(200).json(higherAuthorityName);  
  } catch (error) {
    res.status(500).json({ message: "Error fetching Higher Authority Name data" });
  }
  })


  ///Delete higher Authority Name details
router.delete("/deleteHigherAuthorityName/:id" , async(req, res)=>{
    try {
      const id=req.params.id
      const higherAuthorityName = await higherAuthorityNameModel.findByIdAndDelete({_id:id})
      if (!higherAuthorityName) {
        return res.status(404).json({ message: "higher authority name not found" });
    }
    res.status(200).json(higherAuthorityName);  
  } catch (error) {
    res.status(500).json({ message: "Error fetching higher authority name data" });
  }
  })

  module.exports=router