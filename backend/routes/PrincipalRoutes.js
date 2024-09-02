const httpStatus = require("http-status");
const principalModel = require("../models/principalModel");

const router = require("express").Router()

///add principal
router.post("/addPrincipal" , async(req , res)=>{
    const {name , email, password , age , number} = req.body;
    if(!name || !email || !password || !age || !number){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"please fill all field"})
    }
    const check_existing_Principal = await principalModel.findOne({email:email})
    if(check_existing_Principal){
        return res.status(httpStatus.BAD_REQUEST)
        .send({message:"Accound allready exist"})
    }

    await principalModel.create({name , email , password , age , number})
    return res.send({
        message:"add successfully"
    })
})




////show all principal data
router.get("/showPrincipalData", async (req, res) => {
    try {
      const principals = await principalModel.find({});
      res.status(200).json(principals);  // Send the fetched data as a JSON response
    } catch (error) {
      res.status(500).send({ message: "Error fetching principal data" });
    }
  });


  // fetch principal data by id
  router.get("/getPrincipal/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const principal = await principalModel.findById(id);
        if (!principal) {
            return res.status(404).json({ message: "Principal not found" });
        }
        res.status(200).json(principal);  // Send the fetched principal data as a JSON response
    } catch (error) {
        res.status(500).json({ message: "Error fetching principal data" });
    }
});


////update principal data detail
router.put("/updateprincipal/:id", async (req , res)=>{
  try {
    const id=req.params.id
    const principal = await principalModel.findByIdAndUpdate({_id:id}, {name:req.body.name , email:req.body.email , password:req.body.password , age:req.body.age , number:req.body.number})
    if (!principal) {
      return res.status(404).json({ message: "Principal not found" });
  }
  res.status(200).json(principal);  
} catch (error) {
  res.status(500).json({ message: "Error fetching principal data" });
}
})


///Delete principal details
router.delete("/deletePrincipal/:id" , async(req, res)=>{
  try {
    const id=req.params.id
    const principal = await principalModel.findByIdAndDelete({_id:id})
    if (!principal) {
      return res.status(404).json({ message: "Principal not found" });
  }
  res.status(200).json(principal);  
} catch (error) {
  res.status(500).json({ message: "Error fetching principal data" });
}
})
  
module.exports=router