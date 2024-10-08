import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TeacherLogin() {

  const[email , setEmail]=useState("")
  const[password , setPassword]=useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:3001/api/teacher_login" , {email , password}) 
    .then(res=>{
      console.log(res)
      localStorage.setItem("teacherEmail" , res.data.email)
      alert("hello teacher")
      navigate("/teacher_dashboard")
    }).catch(err=>{
      console.log(err) 
    })
  }


  return (
    <div className="p-20 bg-gray-900">
        <div className="flex justify-center items-center p-10">
          <form
            className="flex flex-col border-2 p-10 bg-gray-200 rounded-xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-semibold flex justify-center pb-6 items-center">
              Teacher Login
            </h1>

            <label htmlFor="email" className="font-semibold py-2">
              Email:
            </label>
            <input
              type="email"
              className="border-2 px-6 py-1 rounded-lg"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="font-semibold py-2">
              Password:
            </label>
            <input
              type="password"
              className="border-2 px-6 py-1 rounded-lg"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
            

            <div className="py-6">
              <button
                type="submit"
                className="bg-blue-600 text-white w-full rounded-lg py-1"
              >
                Sign In
              </button>
              
            </div>
          </form>
        </div>
      </div>
  )
}

export default TeacherLogin
