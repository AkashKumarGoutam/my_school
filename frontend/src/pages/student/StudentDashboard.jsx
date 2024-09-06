import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentDashboard() {
    const [studentEmail , setStudentEmail] = useState("")

    useEffect(() => {
        // Get the email from local storage
        const email = localStorage.getItem("studentEmail");
        setStudentEmail(email);
      }, []);

      const navigate = useNavigate();
  const handleLogout = () => {
    axios.get("http://localhost:3001/api/logout")
      .then((res) => {
        if (res.data.status) {
          localStorage.removeItem("studentEmail");
          navigate("/student_login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-900 py-20">
      <div className="flex items-center justify-end pr-20">
        <h1 className="text-white text-lg font-semibold px-6">
          USER:- {studentEmail}
        </h1>
        <button
          className="text-2xl font-semibold bg-white px-6 py-1 rounded-xl"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="text-white font-semibold flex flex-col justify-center items-center">
        <h1 className="text-3xl">Hello Student</h1>
        <h1 className="text-md underline"> All Data here</h1>
      </div>
      <div className="flex justify-center gap-10 py-8">
        <Link
          to="/student_dashboard/edit_student"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Edit
        </Link>
      </div>

      <div className="bg-gray-900">
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 rounded-lg ">
        <h1 className="text-xl font-semibold flex justify-center underline py-2 pb-6">
          Edit Student Details
        </h1>
        <div>
          <form>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold">Name:-</label>
              <input
                type="text"
                placeholder="name"  
                className=" rounded-lg px-2 py-1 w-96"
                // value={name}
                onChange={(e) => {
                  // setName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold">Email:-</label>
              <input
                type="email"
                placeholder="email"
                className=" rounded-lg px-2 py-1 w-96"
                // value={email}
                onChange={(e) => {
                  // setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold">Password:-</label>
              <input
                type="password"
                placeholder="password"
                className=" rounded-lg px-2 py-1 w-96"
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold">Age:-</label>
              <input
                type="number"
                placeholder="age"
                className=" rounded-lg px-2 py-1 w-96"
                // value={age}
                // onChange={(e) => {
                //   setAge(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold"> Mob Number:-</label>
              <input
                type="number"
                placeholder="Mob number"
                className=" rounded-lg px-2 py-1 w-96"
                // value={number}
                // onChange={(e) => {
                //   setNumber(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-20 px-10 py-4">
              <label className="text-lg font-bold"> Class :-</label>
              <input
                type="text"
                placeholder="Class"
                className=" rounded-lg px-2 py-1 w-96"
                // value={classes}
                // onChange={(e) => {
                //   setClasses(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center py-4">
              <button className="text-lg bg-blue-800 text-white px-4 py-1 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default StudentDashboard;
