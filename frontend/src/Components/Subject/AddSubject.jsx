import React, { useState } from "react";
import axios from "axios";

function AddSubject() {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subjectCode || !subjectName) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/subject/addSubject", {
        subjectName,
        subjectCode,
      });

      setMessage("Subject added successfully!");
      setSubjectCode("");
      setSubjectName("");

      setTimeout(() => setMessage(""), 2000); // Remove message after 2 sec
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to add subject");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-xl font-semibold text-center underline pb-4">Add New Subject</h1>

        {message && (
          <div className="text-center p-2 mb-4 text-white bg-blue-500 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-bold">Subject Code:</label>
            <input
              type="text"
              value={subjectCode}
              placeholder="Enter Subject Code"
              className="w-full p-2 rounded-lg border border-gray-400"
              onChange={(e) => setSubjectCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-bold">Subject Name:</label>
            <input
              type="text"
              value={subjectName}
              placeholder="Enter Subject Name"
              className="w-full p-2 rounded-lg border border-gray-400"
              onChange={(e) => setSubjectName(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="text-lg bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSubject;
