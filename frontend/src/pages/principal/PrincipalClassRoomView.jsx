import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PrincipalClassRoomView() {
  const [classroom, setClassroom] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    axios
      .get("http://localhost:3001/classroom/showClassroomData")
      .then((res) => setClassroom(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this classroom?")) {
      try {
        await axios.delete(`http://localhost:3001/classroom/deleteClassroom/${id}`);
        setClassroom(classroom.filter((item) => item._id !== id));
        alert("Classroom deleted successfully!");
      } catch (err) {
        console.error("Error deleting classroom:", err);
        alert("Failed to delete classroom.");
      }
    }
  };

  // Function to extract numeric value from a string (e.g., "Classroom 10" → 10)
  const extractNumber = (name) => {
    const num = name.match(/\d+/); // Extracts numbers from the string
    return num ? parseInt(num[0], 10) : 0; // Convert to number
  };

  // Sorting logic
  const sortedClassrooms = [...classroom].sort((a, b) => {
    const numA = extractNumber(a.classroomName);
    const numB = extractNumber(b.classroomName);

    if (sortType === "num-asc") return numA - numB; // Ascending order
    if (sortType === "num-desc") return numB - numA; // Descending order
    return 0; // Default order
  });

  return (
    <div className="bg-gray-900 px-12">
      <div>
        <h1 className="text-4xl font-semibold text-white pt-28 flex justify-center underline">
          Class Room
        </h1>
      </div>

      <div className="container mx-auto py-8 relative overflow-x-auto">
        <div className="p-6 flex justify-between">
          <Link
            to="/principal_dashboard/principal_classroom/addClassroom"
            className="bg-green-500 px-6 py-2 rounded-lg text-white"
          >
            ADD
          </Link>
          <select
            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Default Order</option>
            <option value="num-asc">Classroom Number (Lowest to Highest)</option>
            <option value="num-desc">Classroom Number (Highest to Lowest)</option>
          </select>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Block Name</th>
              <th className="px-6 py-3">Classroom Number</th>
              <th className="px-6 py-3">Edit</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {sortedClassrooms.length > 0 ? (
              sortedClassrooms.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                 <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.blockName}</td>
                  <td className="px-6 py-4">{item.classroomName}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/principal_dashboard/principal_classroom/editClassroom/${item._id}`}
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
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No classrooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrincipalClassRoomView;
