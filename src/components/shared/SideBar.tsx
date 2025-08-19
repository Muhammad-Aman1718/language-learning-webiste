import React from "react";
import {
  MdFaceUnlock,
  MdLogout,
  MdOutlineLibraryBooks,
  MdOutlineSettings,
  MdLocationOn,
} from "react-icons/md";
import { NavLink } from "react-router";
import Img from "../../assets/about/asianWomen.png";

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuClick }) => {
  return (
    <div className="w-72  bg-[#F8FAFD] h-full  shadow-md flex flex-col py-12 pl-4 max-md:w-full max-md:px-5 ">
      {/* Profile Section */}
      <div className="flex items-center">
        <img
          src={Img}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-2"
        />
        <div className=" pl-4 ">
          <h3 className="font-bold text-[20px] text-black  ">Maya Atay</h3>
          <div className="flex items-center text-[#1D1D1D] font-medium text-[12px] mt-2">
            <MdLocationOn className="mr-1 w-6 h-6 text-[#404040]" />
            United Arab Emirates
          </div>
        </div>
      </div>

      {/* Menu in desktop */}
      <nav className="flex flex-col gap-y-5 mt-4 max-md:hidden ">
        <h3 className=" text-[20px] text-[#404040] mb-6 ">Menu</h3>
        <button
          onClick={() => onMenuClick("myProfile")}
          className={`flex items-center px-6 py-3 text-[18px] rounded-md ${
            activeMenu === "myProfile"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdFaceUnlock className="mr-6 w-6 h-6 " /> Profile
        </button>
        <button
          onClick={() => onMenuClick("myCourses")}
          className={`flex items-center px-6 py-3 text-[18px]  ${
            activeMenu === "myCourses"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdOutlineLibraryBooks className="mr-6 w-6 h-6 " /> My Courses
        </button>
        <button
          onClick={() => onMenuClick("settings")}
          className={`flex items-center px-6 py-3 text-[18px] ${
            activeMenu === "settings"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdOutlineSettings className="mr-6 w-6 h-6 " /> Setting
        </button>
        <button className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
          <MdLogout className="mr-6 w-6 h-6 " /> Log out
        </button>
      </nav>

      <nav className="flex flex-col gap-y-5 mt-4 md:hidden ">
        <h3 className=" text-[20px] text-[#404040] mb-6 ">Menu</h3>
        <button
          onClick={() => onMenuClick("myProfile")}
          className={`flex items-center px-6 py-3 text-[18px] rounded-md ${
            activeMenu === "myProfile"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdFaceUnlock className="mr-6 w-6 h-6 " /> Profile
        </button>
        <button
          onClick={() => onMenuClick("myCourses")}
          className={`flex items-center px-6 py-3 text-[18px]  ${
            activeMenu === "myCourses"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdOutlineLibraryBooks className="mr-6 w-6 h-6 " /> My Courses
        </button>
        <NavLink
          to="account-info"
          // onClick={() => onMenuClick("settings")}
          className={`flex items-center px-6 py-3 text-[18px] ${
            activeMenu === "settings"
              ? "bg-[#E9EFFD] border-r-4 rounded-r-[8px] text-[#2563EB]  border-blue-500"
              : "text-[#404040] "
          }`}
        >
          <MdOutlineSettings className="mr-6 w-6 h-6 " /> Setting
        </NavLink>
        <button className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
          <MdLogout className="mr-6 w-6 h-6 " /> Log out
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
