import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditSubject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch Subject Data
  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/subject/getSubject/${id}`);
        setSubjectCode(response.data.subjectCode);
        setSubjectName(response.data.subjectName);
      } catch (error) {
        setMessage("Failed to fetch subject details");
      }
    };
    fetchSubject();
  }, [id]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/subject/updateSubject/${id}`, {
        subjectCode,
        subjectName,
      });

      setMessage("Subject updated successfully!");
      setTimeout(() => {
        navigate("/principal_dashboard/principal_subject_view");
      }, 1000);
    } catch (error) {
      setMessage("Failed to update subject");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-xl font-semibold text-center underline pb-4">Edit Subject</h1>

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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSubject;
