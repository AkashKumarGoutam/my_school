const mongoose = require("mongoose")

 async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Role-Based-Auth-Akash" , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Database is connected");
        
    } catch (error) {
        console.log("Database is not connected" , error)
        
    }
    
 }

module.exports = connectDB;
