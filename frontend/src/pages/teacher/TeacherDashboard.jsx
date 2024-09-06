import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TeacherDashboard() {
  const navigate =useNavigate()
  const [allClasses, setAllClasses] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [timetables , setTimetable]= useState();
  const [ teacherEmail , setTeacherEmail]= useState("")

  useEffect(()=>{
      const email = localStorage.getItem("teacherEmail")
      setTeacherEmail(email)
  },[])


  
  // Fetch available classes and teachers
  useEffect(() => {
    axios
      .get("http://localhost:3001/timetable/get_available_classes_teachers")
      .then((res) => {
        setAllClasses(res.data.availableClasses);
        setAllTeachers(res.data.availableTeachers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedClass, selectedTeacher]); // Re-fetch available options after selection


  // Fetch after create classes or time table
  useEffect(() => {
    axios.get("http://localhost:3001/timetable/get_all_created_timetable")
    .then(res=>{
      console.log(res);
      setTimetable(res.data)
    }).catch(err=>{
      console.log(err);      
    })
  }, [selectedClass, selectedTeacher])
  


  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };



  const handleCreateClassesAndTeacher = async (e) => {
    e.preventDefault();
    if (!selectedClass || !selectedTeacher) {
      alert("Please select both a class and a teacher.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/timetable/assign_classes", {
        classes: selectedClass,
        teachers: selectedTeacher,
      });
      console.log(response);
      alert("Timetable created successfully!");

      // Remove selected class and teacher from the lists
      setAllClasses(allClasses.filter((item) => item.classesName !== selectedClass));
      setAllTeachers(allTeachers.filter((item) => item.name !== selectedTeacher));

      setSelectedClass("");
      setSelectedTeacher("");
    } catch (err) {
      console.error(err);
      alert("Failed to create timetable. Please try again.");
    }
  };



  
  const handleLogout = () => {
    axios.get("http://localhost:3001/api/logout")
      .then((res) => {
        if (res.data.status) {
          localStorage.removeItem("teacherEmail")
          navigate("/teacher_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className='flex items-center justify-end pr-20'>
        <h1 className='text-white text-lg font-semibold px-6'>USER:- {teacherEmail}</h1>
        <button className='text-2xl font-semibold bg-white px-6 py-1 rounded-xl' onClick={handleLogout}>Logout</button>
      </div>
      <div className="text-white font-semibold flex flex-col justify-center items-center">
        <h1 className="text-3xl">Hello Teacher</h1>
        <h1 className="text-md underline"> All Data here</h1>
      </div>
      <div className="flex justify-center gap-10 py-8">
       
        <Link
          to="/teacher_dashboard/student_view"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Student
        </Link>
      </div>

      <div className="container mx-auto flex justify-around">
        <div className="w-[50%] bg-red-200">
          <div>
            <h1 className="text-gray-600 text-2xl font-semibold flex justify-center py-2 underline">
              Create Classroom
            </h1>
            <div className="flex gap-10 px-10 justify-center">
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-800  text-gray-600 text-xl font-semibold">
                  Classes
                </label>


                <div className="relative">
                <select
                    className="w-full bg-white rounded-xl h-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    value={selectedClass}
                    onChange={handleClassChange}
                  >
                    <option value="" disabled>Select Class</option>
                    {allClasses && allClasses.map((item , index) => (
                      <option key={index}>{item.classesName}</option>
                    ))}
                  </select>



                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-800  text-gray-600 text-xl font-semibold">
                  Teachers
                </label>
                <div className="relative">
                <select
                    className="w-full bg-white rounded-xl h-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    value={selectedTeacher}
                    onChange={handleTeacherChange}
                  >
                    <option value="" disabled>Select Teacher</option>
                    {allTeachers && allTeachers.map((item , index) => (
                      <option key={index}>{item.name}</option>
                    ))}
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-4">
              <button className="bg-gray-800 text-white px-6 py-2 rounded " onClick={handleCreateClassesAndTeacher}>Create</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-gray-400 flex gap-4 p-4 flex-wrap">
          {timetables && timetables.map((item , index)=>(
                 <div key={index} className="flex">
                 <div className="bg-black flex flex-col w-56 justify-center items-center rounded">
                   <h1 className="text-xl text-white font-semibold">{item.classes}</h1>
                   <h1 className="text-yellow-400">{item.teachers}</h1>
                 </div>
               </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
