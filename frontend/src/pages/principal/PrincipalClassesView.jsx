import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PrincipalClassesView() {
  const [classes, setClasses] = useState([]);

  // Fetch class data from API
  useEffect(() => {
    axios
      .get("http://localhost:3001/classes/showClassData") // Adjust API URL if needed
      .then((res) => setClasses(res.data))
      .catch((err) => console.log("Error fetching class data:", err));
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      try {
        await axios.delete(`http://localhost:3001/classes/deleteClass/${id}`); 
        setClasses(classes.filter((item) => item._id !== id));
        alert("Class deleted successfully!");
      } catch (err) {
        console.error("Error deleting class:", err);
        alert("Failed to delete class.");
      }
    }
  };

  return (
    <div className="bg-gray-900 px-12">
      <div>
        <h1 className="text-4xl font-semibold text-white pt-28 flex justify-center underline">
          Classes
        </h1>
      </div>
      <div className="container mx-auto py-8 relative overflow-x-auto">
        <div className="p-6">
          <Link
            to="/principal_dashboard/principal_classes_view/add_class"
            className="bg-green-500 px-6 py-1 rounded-lg text-white"
          >
            ADD
          </Link>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Class Name</th>
              <th className="px-6 py-3">Edit</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.className}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/principal_dashboard/principal_classes_view/edit_class/${item._id}`}
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
                <td colSpan="3" className="text-center py-4 text-gray-400">
                  No classes found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrincipalClassesView;
