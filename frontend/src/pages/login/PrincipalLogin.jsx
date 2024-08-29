import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
          navigate("/principal_dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div>
      <div className="p-20 bg-gray-900 h-screen">
        <div className="flex justify-center items-center p-10">
          <form
            className="flex flex-col border-2 p-10 bg-gray-200 rounded-xl"
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
    </div>
  )
}

export default PrincipalLogin
