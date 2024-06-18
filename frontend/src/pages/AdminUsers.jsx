import React, { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch(`https://clg-demo-project-backend.onrender.com/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.users);
      setUsers(data.users);
    } catch (error) {
      console.error("Error in fetching Admin user data", error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-screen bg-gradient-to-r from-zinc-800 via-purple-800 to-blue-950">
        <div className="">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4 mt-2 text-yellow-400">
              Admin Dashboard
            </h1>
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-800  font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Update
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((currUser, index) => {
                    return (
                      <tr className="border-b dark:border-green-300 text-gray-300 font-medium">
                        <td
                          className="whitespace-nowrap  px-6 py-4"
                          key={index}
                        >
                          {currUser.username}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {currUser.email}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {currUser.phone}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          <button className="bg-green-500 py-2 w-20 rounded text-black hover:bg-green-600">
                            Edit
                          </button>
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          <button
                            className="bg-red-600 py-2 w-20 rounded hover:bg-red-700"
                            onClick={() => deleteUserData(currUser._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
