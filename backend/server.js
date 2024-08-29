const express = require("express")
const connectDB = require("./database/db")
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")
const AddPricipalRoute = require("./routes/AddPrincipalRoute")
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json())
///call database
connectDB();

//set Routes
app.use("/api" , authRoutes)
app.use("/principal" , AddPricipalRoute)


///set port
app.listen(3001 , ()=>{
    console.log("listining port is 3001");
})


