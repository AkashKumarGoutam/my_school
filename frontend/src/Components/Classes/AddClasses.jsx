import React, { useState } from "react";
import axios from "axios";

function AddClasses() {
  const [className, setClassName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing

    if (!className.trim()) {
      setMessage("Class Name is required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/classes/addClass", { className });
      setMessage(response.data.message); // Show success message
      setClassName(""); // Clear input field
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding class.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-xl font-semibold text-center underline pb-4">
          Add New Classes
        </h1>
        
        {message && (
          <div className="text-center p-2 mb-4 text-white bg-blue-500 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-bold">Class Name:</label>
            <input
              type="text"
              value={className}
              placeholder="Enter Class Name"
              className="w-full p-2 rounded-lg border border-gray-400"
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-lg bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClasses;
