import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PrincipalDashboard() {
  const [allClasses, setAllClasses] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [timetables, setTimetable] = useState([]);
  const [principalEmail, setPrincipalEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("principalEmail");
    setPrincipalEmail(email);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/timetable/get_available_classes_teachers")
      .then((res) => {
        setAllClasses(res.data.availableClasses);
        setAllTeachers(res.data.availableTeachers);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/timetable/get_all_created_timetable")
      .then((res) => setTimetable(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCreateClassesAndTeacher = async (e) => {
    e.preventDefault();
    if (!selectedClass || !selectedTeacher) {
      alert("Please select both a class and a teacher.");
      return;
    }
    try {
      await axios.post("http://localhost:3001/timetable/assign_classes", {
        classes: selectedClass,
        teachers: selectedTeacher,
      });
      alert("Timetable created successfully!");
      setSelectedClass("");
      setSelectedTeacher("");
    } catch (err) {
      console.error(err);
      alert("Failed to create timetable. Please try again.");
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get("http://localhost:3001/api/logout").then((res) => {
      if (res.data.status) {
        localStorage.removeItem("principalEmail");
        navigate("/dashboard");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 text-white">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-lg font-semibold">USER: {principalEmail}</h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</button>
      </div>

      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Hello Principal</h1>
        <p className="text-lg text-gray-400">Manage Classes & Teachers</p>
      </div>

      <div className="flex justify-center gap-6">
        <Link to="/principal_dashboard/principal_teacher_view" className="bg-blue-500 px-6 py-3 rounded-xl text-lg font-semibold">Teachers</Link>
        <Link to="/principal_dashboard/principal_student_view" className="bg-green-500 px-6 py-3 rounded-xl text-lg font-semibold">Students</Link>
      </div>

      <div className="flex justify-center mt-10 gap-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-2xl font-semibold text-center mb-4">Assign Classes</h2>
          <div className="flex flex-col gap-4">
            <select className="p-3 rounded bg-gray-700" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="">Select Class</option>
              {allClasses.map((item, index) => (
                <option key={index}>{item.classesName}</option>
              ))}
            </select>
            <select className="p-3 rounded bg-gray-700" value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)}>
              <option value="">Select Teacher</option>
              {allTeachers.map((item, index) => (
                <option key={index}>{item.name}</option>
              ))}
            </select>
            <button className="bg-purple-500 px-4 py-2 rounded-lg" onClick={handleCreateClassesAndTeacher}>Create</button>
          </div>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-2/3 flex flex-wrap gap-4">
          {timetables.length > 0 ? timetables.map((item, index) => (
            <div key={index} className="bg-black p-4 rounded-lg text-center w-40 shadow-md">
              <h3 className="text-lg font-bold text-yellow-400">{item.classes}</h3>
              <p className="text-sm">{item.teachers}</p>
            </div>
          )) : <p className="text-gray-400">No timetables available</p>}
        </div>
      </div>
    </div>
  );
}

export default PrincipalDashboard;
