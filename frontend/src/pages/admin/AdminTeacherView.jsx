import React from 'react'
import { Link } from 'react-router-dom'

function AdminTeacherView() {
  return (
    <div className='bg-blue-800 h-screen'>
      <div>
        <h1 className='text-4xl font-semibold text-white  flex justify-center underline pt-20'>Teacher</h1>
      </div>
      <div>
        <div className="container mx-auto pt-20 relative overflow-x-auto">
          <div className='p-6'>
          <Link to="/admin_dashboard/admin_teacherView/create_teacher" className='bg-green-500 px-6 py-1 rounded-lg text-white' >ADD</Link>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Principal Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr. R.K Sinha
                </th>
                <td className="px-6 py-4">rksinha@gmail.com</td>
                <td className="px-6 py-4"><Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded-lg" >Edit</Link></td>
                <td className="px-6 py-4"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg" > Delete</button></td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr.YP Singh
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4"><Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded-lg" >Edit</Link></td>
                <td className="px-6 py-4"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg" > Delete</button></td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr. SS Shakya
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4"><Link to='/admin_dashboard/admin_teacherView/edit_teacher' className="bg-blue-600 text-white px-4 py-2 rounded-lg" >Edit</Link></td>
                <td className="px-6 py-4"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg" > Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>     
    </div>
  )
}

export default AdminTeacherView
