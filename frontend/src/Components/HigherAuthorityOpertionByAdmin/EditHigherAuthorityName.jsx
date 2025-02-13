import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditHigherAuthorityName() {
    const {id} =useParams();
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [age , setAge] = useState("")
    const [number , setNumber] = useState("")
    const [jobPosition , setJobPosition] = useState("")
    const [education , setEducation] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get(`http://localhost:3001/higherAuthorityName/getHigherAuthorityName/${id}`)
          .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setAge(res.data.age);
            setNumber(res.data.number);
            setJobPosition(res.data.jobPosition);
            setEducation(res.data.education);
          })
          .catch((err) => console.log(err));
      }, []);
  
      const handleSubmit=async(e)=>{
          e.preventDefault();
          await axios.put(`http://localhost:3001/higherAuthorityName/updateHigherAuthorityName/${id}` ,{name , email, password , age , number , jobPosition , education})
          .then(res=>{
            console.log(res)
            alert("data update")
            navigate('/admin_dashboard/admin_HigherAuthorityView')
          }).catch(err=>{console.log(err);
          })
      }
      

  return (
    <div className="bg-neutral-900">
    <div className="flex justify-center items-center py-32">
      <div className="bg-gray-900 text-gray-200 rounded-lg ">
        <h1 className="text-xl font-semibold flex justify-center underline py-2 pb-6">
          Edit Higher Authority Details
        </h1>
        <div>
          <form onSubmit={handleSubmit} >
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Name:-</label>
              <input
                type="text"
                placeholder="name"
                className=" rounded-lg px-2 py-1 text-black"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Email:-</label>
              <input
                type="email"
                placeholder="email"
                className=" rounded-lg px-2 py-1 text-black"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Password:-</label>
              <input
                type="password"
                placeholder="password"
                className=" rounded-lg px-2 py-1 text-black"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Age:-</label>
              <input
                type="number"
                placeholder="age"
                className=" rounded-lg px-2 py-1 text-black"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Job Position:-</label>
              <input
                type="text"
                placeholder="Job Position"
                className=" rounded-lg px-2 py-1 text-black"
                value={jobPosition}
                onChange={(e) => {
                  setJobPosition(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold">Education:-</label>
              <input
                type="text"
                placeholder="Education"
                className=" rounded-lg px-2 py-1 text-black"
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center gap-6 px-10 py-4">
              <label className="text-lg font-bold"> Mob Number:-</label>
              <input
                type="number"
                placeholder="Mob number"
                className="border text-black rounded-lg px-2 py-1 text-black"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center py-4">
              <button className="text-lg bg-yellow-500 text-black px-4 py-1 rounded-lg">
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

export default EditHigherAuthorityName
