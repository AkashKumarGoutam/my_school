import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminStudentView() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/student/show_student")
      .then(res => {
        console.log(res);
        setStudent(res.data);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this student ID: ${id}?`);
    if (confirmDelete) {
      await axios.delete(`http://localhost:3001/student/delete_student/${id}`)
        .then(res => {
          console.log(res);
          alert("Student deleted successfully");
          setStudent(prevStudents => prevStudents.filter(student => student._id !== id));
        }).catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className='bg-neutral-900 pt-28 min-h-screen p-10'>
      <div className='flex justify-between items-center px-10'>
        <h1 className='text-4xl font-bold text-white underline'>Student Management</h1>
        <Link to="/admin_dashboard/admin_studentView/create_student" className='bg-green-500 hover:bg-green-600 transition-all px-6 py-2 rounded-lg text-white shadow-md'>ADD STUDENT</Link>
      </div>
      <div className="container mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-md uppercase bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3">Student Name</th>
              <th className="px-6 py-3">Email ID</th>
              <th className="px-6 py-3">Class</th>
              <th className="px-6 py-3">Edit</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {student && student.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition">
                <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.classes}</td>
                <td className="px-6 py-4">
                  <Link to={`/admin_dashboard/admin_studentView/edit_student/${item._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">Edit</Link>
                </td>
                <td className="px-6 py-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminStudentView;
