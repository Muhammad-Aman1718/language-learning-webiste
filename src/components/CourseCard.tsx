import { BookOpen, Users, Trophy, ChevronRight, Star } from "lucide-react";

const CourseCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Course Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Historical architecture"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight">
          Learning historical words and sentences
        </h3>

        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-gray-500">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Lesson: 6</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Student: 198</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Advanced</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Start Course Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            <span>Start Course</span>
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
