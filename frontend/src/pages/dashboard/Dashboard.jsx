import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="flex justify-center bg-neutral-900">
      <h1 className="text-6xl font-semibold text-white pt-28">Login As</h1>
      </div>
      <div className="flex justify-center gap-10 py-20 bg-neutral-900">
        <Link
          to="/admin_login"
          className="px-8 transition duration-300 py-4 bg-yellow-400 text-3xl rounded-lg font-semibold hover:shadow-lg hover:shadow-white"
        >
          Admin
        </Link>
        <Link
          to="/principal_login"
          className="px-8 transition duration-300 py-4 bg-yellow-400 text-3xl rounded-lg font-semibold hover:shadow-lg hover:shadow-white"
        >
          Principal
        </Link>
        <Link
          to="/teacher_login"
          className="px-8 transition duration-300 py-4 bg-yellow-400 text-3xl rounded-lg font-semibold hover:shadow-lg hover:shadow-white"
        >
          Teacher
        </Link>
        <Link
          to="/student_login"
          className="px-8 transition duration-300 py-4 bg-yellow-400 text-3xl rounded-lg font-semibold hover:shadow-lg hover:shadow-white"
        >
          Student
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
