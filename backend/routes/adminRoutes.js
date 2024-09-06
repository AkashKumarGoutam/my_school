const adminModel = require("../models/adminModel")

const router = require("express").Router()

router.get("/show_admin" , async(req,res)=>{
    try {
        const adminShow= await adminModel.findOne({})
        res.status(200).json(adminShow)
    } catch (error) {
        res.status(500).send({message:"fetching error"})
    }
})

module.exports = router