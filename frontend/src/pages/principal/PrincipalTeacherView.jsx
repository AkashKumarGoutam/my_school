import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PrincipalTeacherView() {
    const [teacher , setTeacher] = useState()


    useEffect(() => {
      axios.get("http://localhost:3001/teacher/getAll_teacher")
      .then(res=>{
        console.log(res)
        setTeacher(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }, [])
  
    const handleDelete=async(id)=>{
      const confirmDelete = window.confirm(`are you delete this ${id}`)
      if(confirmDelete){
        await axios.delete(`http://localhost:3001/teacher/delete_teacherDetails/${id}`)
        .then(res=>{
          console.log(res)  
          window.location.reload()
          alert("delete successfully")     
        }).catch(err=>{
          console.log(err);        
        })
      }
    }
  return (
    <div className='bg-gray-900'>
    <div>
      <h1 className='text-4xl font-semibold text-white  flex justify-center underline pt-8'>Teacher</h1>
    </div>
    <div>
      <div className="container mx-auto py-8 relative overflow-x-auto">
        <div className='p-6'>
        <Link to="/principal_dashboard/principal_teacher_view/create_teacher" className='bg-green-500 px-6 py-1 rounded-lg text-white' >ADD</Link>
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


            {teacher && teacher.map((item , index)=>(
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4"><Link to={`/principal_dashboard/principal_teacher_view/edit_teacher/${item._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg" >Edit</Link></td>
              <td className="px-6 py-4"><button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={(e)=>handleDelete(item._id)}> Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>     
  </div>
  )
}

export default PrincipalTeacherView
