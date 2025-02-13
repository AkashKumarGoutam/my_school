import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentLogin() {

  
  const[email , setEmail]=useState("")
  const[password , setPassword]=useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:3001/api/student_login" , {email , password}) 
    .then(res=>{
      console.log(res)
      localStorage.setItem("studentEmail" , res.data.email)
      alert("hello student")
      navigate("/student_dashboard")
    }).catch(err=>{
      console.log(err) 
    })
  }



  return (
    <div className="flex justify-center pt-24 bg-neutral-900">
        <div className="flex justify-center items-center">
        <form
            className="flex flex-col border border-gray-500 text-gray-300 p-10 px-20 bg-gray-900 rounded-xl"
            onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold flex justify-center pb-6 items-center">
          Student Login
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
            className="bg-yellow-500 text-black w-full rounded-lg py-1"
            >
            Sign In
          </button>
          <div className='flex justify-center pt-8'>
                <Link to="/" className='bg-yellow-500 p-2 text-black rounded-lg'>Go to home</Link>
                </div> 
        </div>
      </form>
    </div>
  </div>
  )
}

export default StudentLogin
