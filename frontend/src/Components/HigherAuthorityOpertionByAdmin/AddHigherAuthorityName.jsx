import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddHigherAuthorityName() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [age , setAge] = useState("")
    const [number , setNumber] = useState("")
    const [jobPosition , setJobPosition] = useState("")
    const [education , setEducation] = useState("")
    const navigate = useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/higherAuthorityName/addHigherAuthorityName" , {name , email, password , age , number , jobPosition , education})
        .then(res=>{
            console.log(res)
            alert("Add successfull")
            navigate("/admin_dashboard/admin_higherAuthorityView")
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <div className="bg-gray-900">
      <div className="flex justify-center items-center py-32">
      <div className="bg-gray-200 rounded-lg ">
        <h1 className="text-xl font-semibold flex justify-center underline py-2 pb-6">Add Higher Authority Name</h1>
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
              <label className="text-lg font-bold">Job Position:-</label>
              <input type="text" placeholder="job position" className=" rounded-lg px-2 py-1" onChange={(e)=>{setJobPosition(e.target.value)}} />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Education:-</label>
              <input type="text" placeholder="education" className=" rounded-lg px-2 py-1" onChange={(e)=>{setEducation(e.target.value)}} />
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

export default AddHigherAuthorityName
