import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";

interface TeamCardProps {
  imgSrc: string;
  name: string;
  position: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  imgSrc,
  name,
  position,
  email,
}) => {
  return (
    <div className="border border-[#404040] bg-white shadow-[6px_4px_28px_rgba(95,95,95,.2)] max-w-[260px] rounded-[16px] px-4 py-6  ">
      <div className=" bg-[#E9EFFD] rounded-[8px] flex justify-center items-center  ">
        <img src={imgSrc} alt={name} className="" />
      </div>
      <h4 className=" text-[#0C0C0C] mt-4  ">{name}</h4>
      <p className="text-[#404040] text-[14px] font-medium mt-2 ">{position}</p>
      <p className="text-[#404040] text-[14px] mt-2 ">{email}</p>

      {/* Social Links */}
      <div className=" flex justify-center items-center space-x-3 mt-2">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-900">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-red-500 hover:text-red-700">
          <FaPinterest size={20} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
