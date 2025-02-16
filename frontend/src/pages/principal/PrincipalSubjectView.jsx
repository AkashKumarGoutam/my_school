import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PrincipalSubjectView() {
  const [subject, setSubject] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch Subject Data
  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:3001/subject/showSubjectData");
      setSubject(response.data);
    } catch (error) {
      setMessage("Failed to fetch subjects");
    }
  };

  // Delete Subject
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subject?")) return;

    try {
      await axios.delete(`http://localhost:3001/classroom/deleteSubject/${id}`);
      setMessage("Subject deleted successfully!");
      fetchSubjects(); // Refresh the list after deletion
    } catch (error) {
      setMessage("Failed to delete subject");
    }
  };

  return (
    <div className="bg-gray-900 px-12">
      <div>
        <h1 className="text-4xl font-semibold text-white pt-28 flex justify-center underline pt-8">Subjects</h1>
      </div>

      {message && (
        <div className="text-center p-2 my-4 text-white bg-blue-500 rounded-lg">
          {message}
        </div>
      )}

      <div className="container mx-auto py-8 relative overflow-x-auto">
        <div className="p-6">
          <Link
            to="/principal_dashboard/principal_subject_view/add_subject"
            className="bg-green-500 px-6 py-1 rounded-lg text-white"
          >
            ADD
          </Link>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Subject Code</th>
              <th scope="col" className="px-6 py-3">Subject Name</th>
              <th scope="col" className="px-6 py-3">Edit</th>
              <th scope="col" className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {subject.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.subjectCode}
                </td>
                <td className="px-6 py-4">{item.subjectName}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/principal_dashboard/principal_subject_view/edit_subject/${item._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrincipalSubjectView;
