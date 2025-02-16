const express = require("express")
const connectDB = require("./database/db")
const cors = require('cors')
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoutes")
const HigherAuthorityNameRoutes = require("./routes/HigherAuthorityNameRoutes")
const PricipalRoute = require("./routes/PrincipalRoutes")
const TeacherRoutes = require("./routes/TeacherRoutes")
const StudentRoutes = require("./routes/StudentRoutes")
const ClassroomRoutes = require("./routes/ClassroomsRoutes")
const SubjectRoutes = require("./routes/SubjectRoutes")
const ClassesRoutes = require("./routes/ClassesRoutes")
const assignClassesRoutes = require("./routes/AssignClassesRoutes")
const adminRoutes = require("./routes/adminRoutes")
const cookieParser = require("cookie-parser")
dotenv.config()
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json())
app.use(cookieParser());
///call database
connectDB();

//set Routes
app.use("/api" , authRoutes)
app.use("/admin" , adminRoutes)
app.use("/higherAuthorityName"  , HigherAuthorityNameRoutes)
app.use("/principal" , PricipalRoute)
app.use("/teacher" , TeacherRoutes)
app.use("/student" , StudentRoutes)
app.use("/classroom" , ClassroomRoutes)
app.use("/subject" , SubjectRoutes)
app.use("/classes" , ClassesRoutes)
app.use("/timetable" , assignClassesRoutes)


///set port
app.listen(3001 , ()=>{
    console.log("listining port is 3001");
})


