import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddClassroom() {
  const [classroomName, setClassroomName] = useState("");
  const [blockName, setBlockName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blockName || !classroomName) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/classroom/addClassroom", {
        blockName,
        classroomName,
      });

      alert(response.data.message);
      setBlockName("");
      setClassroomName("");
      navigate("/principal_dashboard/principal_classRoom_view");
    } catch (error) {
      console.error("Error adding classroom:", error);
      alert(error.response?.data?.message || "Failed to add classroom");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-xl font-semibold text-center underline pb-4">Add New Classroom</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-bold">Block Name:</label>
            <input
              type="text"
              value={blockName}
              placeholder="Block"
              className="w-full p-2 rounded-lg border border-gray-400"
              onChange={(e) => setBlockName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-bold">Classroom Number:</label>
            <input
              type="text"
              value={classroomName}
              placeholder="Classroom Name"
              className="w-full p-2 rounded-lg border border-gray-400"
              onChange={(e) => setClassroomName(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-lg bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClassroom;
