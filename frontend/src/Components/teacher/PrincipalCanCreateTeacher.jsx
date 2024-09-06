import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PrincipalCanCreateTeacher() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [age , setAge] = useState("")
    const [password , setPassword] = useState("")
    const [number , setNumber] = useState("")
    const navigate = useNavigate()
  
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      await axios.post("http://localhost:3001/teacher/add_teacher" , {name , email , password , age , number})
      .then(res=>{
        console.log(res)
        alert("add successfully")
        navigate("/admin_dashboard/admin_teacherView")
      }).catch(err=>{
        console.log(err)
      })
    }
  return (
    <div className="bg-gray-900">
    <div className="flex justify-center items-center py-32">
    <div className="bg-gray-200 rounded-lg ">
      <h1 className="text-xl font-semibold flex justify-center underline py-2 pb-6">Add New Teracher</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-6 px-10 py-4">
            <label className="text-lg font-bold">Name:-</label>
            <input type="text" placeholder="name" className=" rounded-lg px-2 py-1" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="flex justify-center items-center gap-6 px-10 py-4">
            <label className="text-lg font-bold">Email:-</label>
            <input type="email" placeholder="email" className=" rounded-lg px-2 py-1"onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className="flex justify-center items-center gap-6 px-10 py-4">
            <label className="text-lg font-bold">Password:-</label>
            <input type="password" placeholder="password" className=" rounded-lg px-2 py-1" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div className="flex justify-center items-center gap-6 px-10 py-4">
            <label className="text-lg font-bold">Age:-</label>
            <input type="number" placeholder="age" className=" rounded-lg px-2 py-1" onChange={(e)=>{setAge(e.target.value)}} />
          </div>
          <div className="flex justify-center items-center gap-6 px-10 py-4">
            <label className="text-lg font-bold"> Mob Number:-</label>
            <input type="number" placeholder="Mob number" className=" rounded-lg px-2 py-1" onChange={(e)=>{setNumber(e.target.value)}}/>
          </div>
          <div className="flex justify-center py-4">
              <button className="text-lg bg-blue-800 text-white px-4 py-1 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
  )
}

export default PrincipalCanCreateTeacher
