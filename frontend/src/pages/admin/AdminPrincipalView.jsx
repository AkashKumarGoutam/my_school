import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminPrincipalView() {
  const [principal, setPrincipal] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/principal/showPrincipalData")
      .then((res) => {
        console.log(res.data);
        setPrincipal(res.data); // Set the response data correctly
      })
      .catch((err) => console.log(err));
  }, []);
  



  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3001/principal/deletePrincipal/${id}`)
           .then((res) => {
               console.log(res);
               alert("Deleted successfully");
               window.location.reload();
            }).catch((err) => console.log(err));
    } 
  };
  

  
  return (
    <div className="bg-gray-900 pb-10">
      <div>
        <h1 className="text-4xl font-semibold text-white flex justify-center underline pt-8">
          Principal
        </h1>
      </div>
      <div>
        <div className="container mx-auto pt-8 relative overflow-x-auto">
          <div className="p-6">
            <Link
              to="/admin_dashboard/admin_principalView/create_principal"
              className="bg-green-500 px-6 py-1 rounded-lg text-white"
            >
              ADD
            </Link>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Principal Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {principal &&
                principal.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/admin_dashboard/admin_principalView/edit_principal/${item._id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg"  onClick={(e)=>handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPrincipalView;
