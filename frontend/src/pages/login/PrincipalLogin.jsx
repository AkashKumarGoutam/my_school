import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function PrincipalLogin() {

  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")
  const navigate = useNavigate()

  axios.defaults.withCredentials= true
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/principal_login", { email, password })
      .then((res) => {
        if (res.status === 200) {  // Ensure successful login
          localStorage.setItem("principalEmail" , res.data.email)
          navigate("/principal_dashboard");
        }
      })
      .catch((err) => console.log(err))
  };

  
  return (
    <div>
      <div className="flex justify-center pt-24 bg-neutral-900">
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col border border-gray-500 text-gray-300 p-10 px-20 bg-gray-900 rounded-xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-semibold flex justify-center pb-6 items-center">
              Principal Login
            </h1>

            <label htmlFor="email" className="font-semibold py-2">
              Email:
            </label>
            <input
              type="email"
              className="border-2 px-6 py-1 rounded-lg text-black"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="font-semibold py-2">
              Password:
            </label>
            <input
              type="password"
              className="border-2 px-6 py-1 rounded-lg text-black"
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

export default PrincipalLogin
