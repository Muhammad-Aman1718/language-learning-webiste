import CourseCard from "../../components/CourseCard";

const Courses = () => {
  return (
    <section className=" border  px-6  mb-20 ">
      <h1 className="text-[40px] text-[#282828] font-bold  mt-10 mb-8   ">
        English Courses
      </h1>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-6   ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <button className="border border-[#2563EB]  text-[#2563EB] w-full cursor-pointer rounded-[8px] mt-6 mx-auto  max-w-[300px] py-3  flex items-center justify-center ">
        Load More
      </button>
    </section>
  );
};

export default Courses;
