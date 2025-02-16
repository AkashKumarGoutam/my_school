import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PrincipalDashboard() {
  const [allClasses, setAllClasses] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [allClassrooms, setAllClassrooms] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [selectedTiming, setSelectedTiming] = useState("");
  const [timetables, setTimetable] = useState([]);
  const [principalEmail, setPrincipalEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("principalEmail");
    if (email) {
      setPrincipalEmail(email);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios.get("http://localhost:3001/timetable/get_available_classes_teachers_classroom_subject")
      .then((res) => {
        setAllClasses(res.data.availableClasses || []);
        setAllTeachers(res.data.availableTeachers || []);
        setAllSubjects(res.data.availableSubjects || []);
        setAllClassrooms(res.data.availableClassrooms || []);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/timetable/get_all_created_timetable")
      .then((res) => setTimetable(res.data || []))
      .catch((err) => console.error("Error fetching timetable:", err));
  }, []);

  const handleCreateClassesAndTeacher = async (e) => {
    e.preventDefault();
    if (!selectedClass || !selectedTeacher || !selectedClassroom || !selectedSubject || !selectedTiming) {
      alert("Please select all required fields.");
      return;
    }
    try {
      await axios.post("http://localhost:3001/timetable/assign_classes", {
        classes: selectedClass,
        teachers: selectedTeacher,
        subject: selectedSubject,
        classroom: selectedClassroom,
        timing: selectedTiming,
      });

      alert("Timetable created successfully!");
      setSelectedClass("");
      setSelectedTeacher("");
      setSelectedSubject("");
      setSelectedClassroom("");
      setSelectedTiming("");

      axios.get("http://localhost:3001/timetable/get_all_created_timetable")
        .then((res) => setTimetable(res.data || []));
    } catch (err) {
      console.error("Error creating timetable:", err);
      alert("Failed to create timetable.");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3001/api/logout");
      localStorage.removeItem("principalEmail");
      navigate("/dashboard");
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      {/* Header */}
      <div className="flex justify-between items-center px-10 mb-10">
        <h1 className="text-lg font-semibold">USER: {principalEmail}</h1>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Hello, Principal</h1>
        <p className="text-lg text-gray-400">Manage Classes & Teachers</p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-6 flex-wrap">
        {[
          { path: "principal_classRoom_view", label: "Classroom" },
          { path: "principal_classes_view", label: "Classes" },
          { path: "principal_subject_view", label: "Subjects" },
          { path: "principal_teacher_view", label: "Teachers" },
          { path: "principal_student_view", label: "Students" },
        ].map((link, index) => (
          <Link
            key={index}
            to={`/principal_dashboard/${link.path}`}
            className="bg-blue-500 hover:bg-blue-600 uppercase px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Forms & Timetable Display */}
      <div className="flex flex-col lg:flex-row justify-center items-start mt-12 gap-10 px-10">
        
        {/* Assign Classes */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Assign Classes</h2>
          <div className="flex flex-col gap-4">
            
            {/* Dropdown Fields */}
            {[
              { label: "Class", value: selectedClass, setValue: setSelectedClass, data: allClasses, key: "className" },
              { label: "Teacher", value: selectedTeacher, setValue: setSelectedTeacher, data: allTeachers, key: "name" },
              { label: "Classroom", value: selectedClassroom, setValue: setSelectedClassroom, data: allClassrooms, key: "classroomName" },
              { label: "Subject", value: selectedSubject, setValue: setSelectedSubject, data: allSubjects, key: "subjectName" },
            ].map((item, index) => (
              <select
                key={index}
                className="p-3 rounded bg-gray-700 text-white"
                value={item.value}
                onChange={(e) => item.setValue(e.target.value)}
              >
                <option value="">{`Select ${item.label}`}</option>
                {item.data.map((option, i) => (
                  <option key={i} value={option[item.key]}>
                    {option[item.key]}
                  </option>
                ))}
              </select>
            ))}

            {/* Timing Dropdown */}
            <select className="p-3 rounded bg-gray-700 text-white" value={selectedTiming} onChange={(e) => setSelectedTiming(e.target.value)}>
              <option value="">Select Timing</option>
              {["9 AM - 10 AM", "10 AM - 11 AM", "11 AM - 12 PM", "1 PM - 2 PM", "2 PM - 3 PM", "3 PM - 4 PM", "4 PM - 5 PM", "5 PM - 6 PM"].map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>

            {/* Create Button */}
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition" onClick={handleCreateClassesAndTeacher}>
              Create
            </button>
          </div>
        </div>

        {/* Display Timetables */}
        <div className="px-2 w-full">
          <h1 className="flex justify-center py-4 text-xl uppercase text-gray-400 underline">TimeTable Schedules</h1>
          {timetables.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
              {timetables.map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-600 transition transform hover:scale-105">
                  <h3 className="text-xl font-bold text-yellow-400 text-center">Class: {item.classes}</h3>
                  <p className="text-md text-gray-300">👨‍🏫 Teacher: <span className="font-semibold text-white">{item.teachers}</span></p>
                  <p className="text-md text-gray-300">📚 Subject: <span className="font-semibold text-white">{item.subject}</span></p>
                  <p className="text-md text-gray-300">🏫 Classroom: <span className="font-semibold text-white">{item.classroom}</span></p>
                  <p className="text-md text-green-400 font-bold mt-2">⏰ {item.timing}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No timetables available</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default PrincipalDashboard;
