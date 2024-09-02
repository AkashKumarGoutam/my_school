import React from 'react'
import { Link } from 'react-router-dom'

function TeacherDashboard() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="text-white font-semibold flex flex-col justify-center items-center">
        <h1 className="text-3xl">Hello Teacher</h1>
        <h1 className="text-md underline"> All Data here</h1>
      </div>
      <div className="flex justify-center gap-10 py-8">
       
        <Link
          to="/admin_dashboard/admin_studentView"
          className="px-6 py-2 shadow rounded-xl bg-white text-2xl font-semibold"
        >
          Student
        </Link>
      </div>

      <div className="container mx-auto flex justify-around">
        <div className="w-[50%] bg-red-200">
          <div>
            <h1 className="text-gray-600 text-2xl font-semibold flex justify-center py-2 underline">
              Create Classroom
            </h1>
            <div className="flex gap-10 px-10 justify-center">
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-800  text-gray-600 text-xl font-semibold">
                  Classes
                </label>
                <div className="relative">
                  <select className="w-full bg-white rounded-xl h-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="brazil">Brazil</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="london">London</option>
                    <option value="washington">Washington</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-1 text-sm text-slate-800  text-gray-600 text-xl font-semibold">
                  Teachers
                </label>
                <div className="relative">
                  <select className="w-full bg-white rounded-xl h-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                    <option value="brazil">Brazil</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="london">London</option>
                    <option value="washington">Washington</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-4">
              <button className="bg-gray-800 text-white px-6 py-2 rounded">Create</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-gray-400 flex gap-4 p-4 flex-wrap">
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>

          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          <div className="flex">
            <div className="bg-black text-white w-32 h-16 flex flex-col justify-center items-center rounded">
              <h1 className="text-xl font-semibold">class</h1>
              <h1 className="text-yellow-400">Teacher</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
