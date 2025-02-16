import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditClasses() {
  const { id } = useParams(); // Get class ID from URL
  const navigate = useNavigate(); // Redirect after update
  const [className, setClassName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch existing class data
  useEffect(() => {
    axios
      .get(`http://localhost:3001/classes/getClass/${id}`)
      .then((res) => setClassName(res.data.className))
      .catch((err) => console.log("Error fetching class data:", err));
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3001/classroom/updateClass/${id}`, {
        className,
      });
      setMessage("Class updated successfully!");
      setTimeout(() => navigate("/principal_dashboard/principal_classes_view"), 1500);
    } catch (err) {
      console.error("Error updating class:", err);
      setMessage("Failed to update class.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3">
        <h1 className="text-xl font-semibold text-center underline pb-4">
          Edit Class
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
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-lg bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClasses;
