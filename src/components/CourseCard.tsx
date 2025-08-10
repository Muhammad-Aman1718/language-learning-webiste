import { BookOpen, Users, Trophy, ChevronRight, Star } from "lucide-react";
import Img1 from "../assets/courses/img1.png";

const CourseCard = () => {
  return (
    <div className="border border-[#DFDFDF] max-w-[392px] mx-auto py-4 px-[18px] bg-white rounded-[8px] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Course Image */}
      <div className="">
        <img
          src={Img1}
          alt="Historical architecture"
          className="w-full h-full rounded-[8px]"
        />
      </div>

      {/* Course Content */}
      <div className="mt-2">
        {/* Course Title */}
        <h3 className="text-[16px] font-semibold text-[#282828] mb-4 leading-tight  max-md:[14px]  ">
          Learning historical words and sentences
        </h3>

        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-gray-500">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#080808] opacity-25 " />
            <span className="text-[#080808] opacity-75 text-sm max-md:text-[11px]  ">
              Lesson: 6
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4text-[#080808] opacity-25 " />
            <span className="text-[#080808] opacity-75 text-sm max-md:text-[11px] ">
              Student: 198
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4text-[#080808] opacity-25 " />
            <span className="text-[#080808] opacity-75 text-sm max-md:text-[11px] ">
              Advanced
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex items-center justify-between max-md:mt-[18px] ">
          {/* Start Course Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 max-md:p-2 rounded-xl flex items-center justify-center gap-x-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <span className=" max-md:text-[10px] ">Start Course</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-bold text-gray-800 ml-1">1</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
