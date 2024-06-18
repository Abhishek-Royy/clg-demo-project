import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { FaServicestack } from "react-icons/fa6";
import { PiStampFill } from "react-icons/pi";
import { AiFillSchedule } from "react-icons/ai";

const AdminLayout = () => {
  return (
    <>
      <h1 className="text-center py-5 md:text-4xl text-3xl font-medium text-indigo-500 underline">
        ♥ Wellcome to Admin Panel ♥
      </h1>
      <nav className="w-full h-20 flex items-center justify-center">
        <ul className="md:flex flex md:gap-40 gap-2 list-none">
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md gap-1">
            <NavLink to="/admin/users">Users</NavLink>
            <HiMiniUsers />
          </li>
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md gap-1">
            <NavLink to="/admin/services">Services</NavLink>
            <FaServicestack />
          </li>
          <li className="bg-white w-28 py-2 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md gap-1">
            <NavLink to="/admin/booking">Booking</NavLink>
            <PiStampFill />
          </li>
          <li className="bg-white w-28 py-2 hidden md:flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-800 to-indigo-500 text-yellow-50 font-medium rounded-md gap-1">
            <NavLink to="/admin/schedule">Schedule</NavLink>
            <AiFillSchedule />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;
