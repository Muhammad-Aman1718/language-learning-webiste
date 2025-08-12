import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";

interface TeamCardProps {
  imgSrc: string;
  name: string;
  position: string;
  email: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, position, email }) => {
  return (
    <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl p-6 flex flex-col items-center text-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{position}</p>
      <p className="text-sm text-blue-500">{email}</p>

      {/* Social Links */}
      <div className="flex space-x-3 mt-3">
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
