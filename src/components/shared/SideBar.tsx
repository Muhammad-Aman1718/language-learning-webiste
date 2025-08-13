import React from "react";
import { FaUser, FaBook, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Img from "../../assets/about/asianWomen.png";

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuClick }) => {
  return (
    <div className="w-72 bg-[#F8FAFD] h-full shadow-md flex flex-col py-12 pl-4 ">
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

      {/* Menu */}
      <nav className="flex flex-col mt-4">
        <button
          onClick={() => onMenuClick("profile")}
          className={`flex items-center px-6 py-3 hover:bg-gray-100 ${
            activeMenu === "profile" && "bg-gray-100 border-l-4 border-blue-500"
          }`}
        >
          <FaUser className="mr-3 text-gray-600" /> Profile
        </button>
        <button
          onClick={() => onMenuClick("courses")}
          className={`flex items-center px-6 py-3 hover:bg-gray-100 ${
            activeMenu === "courses" && "bg-gray-100 border-l-4 border-blue-500"
          }`}
        >
          <FaBook className="mr-3 text-gray-600" /> My Courses
        </button>
        <button
          onClick={() => onMenuClick("settings")}
          className={`flex items-center px-6 py-3 hover:bg-gray-100 ${
            activeMenu === "settings" &&
            "bg-gray-100 border-l-4 border-blue-500"
          }`}
        >
          <FaCog className="mr-3 text-gray-600" /> Setting
        </button>

        <div className="mt-auto">
          <button className="flex items-center px-6 py-3 text-red-500 hover:bg-gray-100">
            <FaSignOutAlt className="mr-3" /> Log out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
