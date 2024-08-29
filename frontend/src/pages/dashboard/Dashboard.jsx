import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <div className='flex justify-center gap-10 py-48 bg-gray-900'>
      <Link to="/admin_login" className='px-8 py-4 bg-gray-400 text-3xl rounded-lg font-semibold hover:text-white'>Admin</Link>
        <Link to="/principal_login" className='px-8 py-4 bg-gray-400 text-3xl rounded-lg font-semibold hover:text-white'>Principal</Link>
        <Link to="/teacher_login" className='px-8 py-4 bg-gray-400 text-3xl rounded-lg font-semibold hover:text-white'>Teacher</Link>
        <Link to="/student_login" className='px-8 py-4 bg-gray-400 text-3xl rounded-lg font-semibold hover:text-white'>Student</Link>
      </div>
    </div>
  )
}

export default Dashboard
