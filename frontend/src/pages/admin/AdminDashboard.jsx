import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className="bg-gray-900 py-48">

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
