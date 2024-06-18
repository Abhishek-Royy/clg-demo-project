// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../auth/auth";

// const Navbar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <>
//       <nav className="w-full h-20 bg-slate-900 text-white flex px-20 items-center justify-between">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
//           className="w-16"
//           alt="Code Symbol"
//         />

//         <ul className="flex gap-20 text-lg list-none">

//           <li className="hover:text-amber-300">
//             <NavLink to="/" activeClassName="text-amber-300">
//               Home
//             </NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/about" activeClassName="text-amber-300">
//               About
//             </NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/blog" activeClassName="text-amber-300">
//               Blogs
//             </NavLink>
//           </li>
//           <li className="hover:text-amber-300">
//             <NavLink to="/notes" activeClassName="text-amber-300">
//               Notes
//             </NavLink>
//           </li>

//           {isLoggedIn ? (
//             <li className="hover:text-amber-300">
//               <NavLink to="/logout" activeClassName="text-amber-300">
//                 Logout
//               </NavLink>
//             </li>
//           ) : (
//             <>
//               <li className="hover:text-amber-300">
//                 <NavLink to="/register" activeClassName="text-amber-300">
//                   SignUp
//                 </NavLink>
//               </li>
//               <li className="hover:text-amber-300">
//                 <NavLink to="/login" activeClassName="text-amber-300">
//                   Login
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = isLoggedIn
    ? [
        { id: 1, text: "Home", route: "/" },
        { id: 2, text: "About", route: "/about" },
        { id: 3, text: "Blogs", route: "/blog" },
        { id: 4, text: "Notes", route: "/notes" },
        { id: 5, text: "Contact Us", route: "/contact" },
        { id: 6, text: "Logout", route: "/logout" },
      ]
    : [
        { id: 1, text: "Home", route: "/" },
        { id: 2, text: "About", route: "/about" },
        { id: 3, text: "Blogs", route: "/blog" },
        { id: 4, text: "Notes", route: "/notes" },
        // { id: 5, text: "Contact Us", route: "/contact" },
        { id: 5, text: "SignUp", route: "/register" },
        { id: 6, text: "Login", route: "/login" },
      ];

  return (
    <>
      <div
        className="bg-slate-900 text-white flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-20 z-[999999999]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <NavLink to="/">
          <img
            className="w-20"
            src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
            alt="Web-logo"
          />
        </NavLink>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300  hover:text-amber-300 ${
                activeMenu === item.text ? "active" : ""
              }`}
              onMouseEnter={() => setActiveMenu(item.text)}
              onMouseLeave={() => setActiveMenu("")}
            >
              <NavLink to={item.route} className="flex items-center">
                {item.text}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`${
            nav ? "fixed" : "hidden"
          } md:hidden left-0 top-20 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
        >
          <img
            className="w-20"
            src="https://static.vecteezy.com/system/resources/previews/013/441/088/original/code-symbol-illustration-png.png"
            alt="Web-logo"
          />
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-white cursor-pointer border-gray-600"
            >
              <NavLink to={item.route} onClick={() => setNav(false)}>
                {item.text}
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
