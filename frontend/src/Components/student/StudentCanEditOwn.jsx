import React from 'react'

function StudentCanEditOwn() {
  return (
    <div className="bg-gray-900">
    <div className="flex justify-center items-center py-20">
      <div className="bg-gray-200 rounded-lg ">
        <h1 className="text-xl font-semibold flex justify-center underline py-2 pb-6">
          Edit Student Details
        </h1>
        <div>
          <form>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Name:-</label>
              <input
                type="text"
                placeholder="name"  
                className=" rounded-lg px-2 py-1"
                // value={name}
                onChange={(e) => {
                  // setName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Email:-</label>
              <input
                type="email"
                placeholder="email"
                className=" rounded-lg px-2 py-1"
                // value={email}
                onChange={(e) => {
                  // setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Password:-</label>
              <input
                type="password"
                placeholder="password"
                className=" rounded-lg px-2 py-1"
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Age:-</label>
              <input
                type="number"
                placeholder="age"
                className=" rounded-lg px-2 py-1"
                // value={age}
                // onChange={(e) => {
                //   setAge(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold"> Mob Number:-</label>
              <input
                type="number"
                placeholder="Mob number"
                className=" rounded-lg px-2 py-1"
                // value={number}
                // onChange={(e) => {
                //   setNumber(e.target.value);
                // }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold"> Class :-</label>
              <input
                type="text"
                placeholder="Class"
                className=" rounded-lg px-2 py-1"
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
  )
}

export default StudentCanEditOwn
