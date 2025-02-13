import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const navigate = useNavigate()
  
    axios.defaults.withCredentials= true
    
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/api/admin_login", { email, password })
        .then((res) => {
          if (res.status === 200) {  // Ensure successful login
            alert("Hello Admin")
            navigate("/admin_dashboard");
          }
        })
        .catch((err) => {
          alert("Please fill correct data")
          console.log(err)
        });
    };
  
    
    return (
      <div>
        <div className="flex justify-center pt-20 bg-neutral-900 ">
          <div className="flex justify-center items-center">
            <form
              className="flex flex-col text-yellow-600 p-10 px-28 bg-gray-900 border border-gray-700 rounded-xl"
              onSubmit={handleSubmit}
            >
              <h1 className="text-2xl underline font-semibold flex justify-center pb-2 items-center">
                Admin Login
              </h1>
  
              <label htmlFor="email" className="font-semibold py-2">
                Email:
              </label>
              <input
                type="email"
                className="border-2 px-6 py-1 border-yellow-400 text-black rounded-lg"
                autoComplete="off"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
  
              <label htmlFor="password" className="font-semibold py-2">
                Password:
              </label>
              <input
                type="password"
                className="border-2 px-6 py-1 border-yellow-400 text-black rounded-lg"
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
      </div>
    )
}

export default AdminLogin
