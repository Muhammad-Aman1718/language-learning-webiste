import CourseCard from "../../CourseCard";
import CourseCardHorizontal from "../../CourseCardHorizontal";
import Img2 from "../../../assets/courses/Img2.png";

const MyCourses = () => {
  return (
    <div>
      <h1 className=" text-[32px] font-bold text-[#1D1D1D]  ">My Courses</h1>
      <div>
        <CourseCard />
        <CourseCard />
      </div>
      <div>
        <CourseCardHorizontal
          image={Img2}
          title="Learning historical words and sentences"
          lessons={6}
          students={198}
          level="Advanced"
          points={25}
          totalPoints={100}
          days={56}
          authorName="Jon Kantner"
          authorPosition="Writer"
          authorImg="/images/author.jpg"
        />
      </div>
    </div>
  );
};

export default MyCourses;
