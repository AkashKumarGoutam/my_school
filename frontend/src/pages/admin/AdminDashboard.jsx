import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate();
  const[admin , setAdmin]=useState()

  useEffect(() => {
    axios.get('http://localhost:3001/admin/show_admin')
      .then(res => {
        if (res.data.length > 0) {
          console.log(res.data[0].email);
          setAdmin(res.data[0].email); // Access the first admin's email
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  const handleLogout = ()=>{
    axios.get("http://localhost:3001/api/logout")
    .then(res=>{
      console.log(res.data.status)
      if(res.data.status){
        navigate("/admin_login")
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="bg-gray-900 py-48">
      <div className='flex items-center justify-end pr-20'>
         <h1 className='text-white text-lg font-semibold px-6'>USER :- {admin}</h1>
        <button className='text-2xl bg-white font-semibold w-28 h-10 flex items-center justify-center rounded-lg' onClick={handleLogout}>Logout</button>
      </div>

      <div className='text-white font-semibold flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Hello Admin</h1>
      <h1 className='text-md underline'> All Data here</h1>
      </div>
       <div className="flex justify-center gap-10 py-20">
        <Link
          to="/admin_dashboard/admin_principalView"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Principal
        </Link>
        <Link
          to="/admin_dashboard/admin_teacherView"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Teacher
        </Link>
        <Link
          to="/admin_dashboard/admin_studentView"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Student
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
