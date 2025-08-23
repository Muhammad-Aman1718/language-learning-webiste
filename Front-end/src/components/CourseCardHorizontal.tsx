import React from "react";
import { TrophyIcon, UsersIcon, BookOpenIcon } from "lucide-react";

interface CourseCardHorizontalProps {
  image: string;
  title: string;
  lessons: number;
  students: number;
  level: string;
  points: number;
  totalPoints: number;
  days: number;
  authorName: string;
  authorPosition: string;
  authorImg: string;
}

const CourseCardHorizontal: React.FC<CourseCardHorizontalProps> = ({
  image,
  title,
  lessons,
  students,
  level,
  points,
  totalPoints,
  days,
  authorName,
  authorPosition,
  authorImg,
}) => {
  const percentage = (points / totalPoints) * 100;

  return (
    <div className="flex w-full bg-white rounded-xl shadow-sm border p-4 gap-4">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
      />

      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <BookOpenIcon size={16} /> Lesson : {lessons}
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon size={16} /> Student : {students}
          </span>
          <span className="flex items-center gap-1">
            <TrophyIcon size={16} /> {level}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-2">
          <div className="w-full h-[2px] bg-gray-200 relative">
            <div
              className="absolute left-0 h-[2px] bg-orange-500"
              style={{ width: `${percentage}%` }}
            />
            {/* dot */}
            <div
              className="absolute -top-[4px] w-[10px] h-[10px] bg-orange-500 rounded-full"
              style={{ left: `${percentage}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-500">
            <span>
              points : {points} / {totalPoints}
            </span>
            <span>days : {days}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <img
              src={authorImg}
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold">{authorName}</p>
              <p className="text-gray-500">{authorPosition}</p>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm flex items-center gap-1">
            Let’s go
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCardHorizontal;
