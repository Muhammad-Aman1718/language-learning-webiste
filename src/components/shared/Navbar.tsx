// import React from "react";
import { ChevronDown, User } from "lucide-react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className=" border-b my-[28px] ">
      <nav className="border flex justify-between items-center  ">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-x-10 text-[#404040]  ">
            <li>Home</li>
            <li>Courses</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        <div className=" flex items-end gap-x-6 ">
          <User size={20} color="#404040" />
          <div className="flex items-center  gap-x-2 ">
            <span className=" text-[20px]  text-[#404040]  ">EN</span>
            <ChevronDown size={24} color="#404040" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
