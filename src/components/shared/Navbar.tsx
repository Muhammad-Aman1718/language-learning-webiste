// import React from "react";
// import { ChevronDown, User } from "lucide-react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="border-b  py-[28px] ">
      <nav className=" border w-full max-w-[1224px] mx-auto  flex justify-between items-center  ">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-x-10 text-[#404040]  ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB] " : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB] " : ""
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB] " : ""
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB] " : ""
                }
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex items-center gap-x-6 ">
          {/* <User size={20} color="#404040" /> */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `py-2 px-6 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#2563EB] text-white font-semibold"
                  : "border-2 border-[#2563EB] text-[#2563EB] font-medium hover:bg-[#2563EB] hover:text-white"
              }`
            }
          >
            Login
          </NavLink>
          {/* <div className="flex items-center  gap-x-2 ">
            <span className=" text-[20px]  text-[#404040]  ">EN</span>
            <ChevronDown size={24} color="#404040" />
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
