import React from "react";
import { useNavigate } from "react-router";
import { FiChevronLeft } from "react-icons/fi";

interface PreviousRouteProps {
  title: string;
}

const PreviousRoute: React.FC<PreviousRouteProps> = ({ title }) => {
  const navigate = useNavigate();

  // When arrow is clicked go to previous page
  const handleBack = () => navigate(-1);

  return (
    <div className="flex items-center justify-between w-full mb-6  md:hidden ">
      {/* Back Arrow */}
      <button
        onClick={handleBack}
        className="text-gray-700 hover:text-gray-900"
      >
        <FiChevronLeft className=" w-6 h-6  " />
      </button>

      {/* Title */}
      <h3 className=" text-[#1D1D1D]  font-bold">{title}</h3>

      {/* empty div just to keep the title in center */}
      <div className="w-6" />
    </div>
  );
};

export default PreviousRoute;
