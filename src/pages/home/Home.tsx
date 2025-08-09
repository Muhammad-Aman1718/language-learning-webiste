import HeroImg from "../../assets/rafiki.png";
import Img from "../../assets/Rectangle.png";
import FeatureCardWithImage from "../../components/FeatureCardWithImage";
import Img1 from "../../assets/img.png";
import Img2 from "../../assets/image 1.png";
import CourseCard from "../../components/CourseCard";

const Home = () => {
  return (
    <main className=" border w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6  ">
        <div className="  px-6   flex flex-col md:flex-row items-center">
          {/* Left Text */}
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-[44px]  font-bold leading-snug">
              Studying Online is now <br /> much easier
            </h1>
            <p className="text-[20px]  mt-4">
              Speak Up is an interesting platform that will teach <br /> you in
              more an interactive way
            </p>
            <button className="mt-6 bg-[#EBAD25] text-white font-medium py-3 px-4 rounded-lg">
              Let&apos;s Start
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={HeroImg} // apna image path yahan dalna
              alt="Online Study"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* First Info Section */}
      <section className=" mt-[70px] mb-[30px] px-6  flex items-center justify-between  ">
        <div className=" border border-[#BDBDBD] rounded-[16px] px-[22px] py-[45px] text-center w-full max-w-[560px]  ">
          <h1 className=" text-[#2563EB] text-[32px] font-bold mb-6 ">
            You can learn online and <br /> sit in Your Home
          </h1>
          <p className="text-[18px] text-[#404040]  ">
            speak Up is a quick and convenient online test to help higher
            education institutions and employers check the English levels of
            individuals and groups of candidates.
          </p>
        </div>
        <div className="  w-full max-w-[600px]  ">
          <img src={Img} alt="This is img not showing" className=" mb-8 " />
          <div className=" flex flex-col gap-y-[9px] ">
            <h1 className=" text-[#1D1D1D] text-[40px] font-bold  ">
              You Speak Up To 6 Month Faster Than Now
            </h1>
            <p className="text-[#404040] text-[20px] ">
              Our range of free teaching resources, lesson plans and activities
              is designed to help you prepare your students for our exams and
              tests. We also have a range of teaching qualifications, courses
              and support to help you as a teacher.
            </p>
            <div className="border border-[#BDBDBD] rounded-[10px] px-4 py-2.5">
              <h4 className=" text-[#0C0C0C] text-[14px] font-semibold  ">
                Fun Fact
              </h4>

              <p className="text-[#404040] text-[14px]  ">
                Did you know remember %95 of a massage when it’s watched vs only
                10% of what you read try it.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Info Section */}
      <FeatureCardWithImage
        img={Img1}
        heading="You can learn online and sit in class"
        headingStyle="text-[32px] font-bold text-[#1D1D1D]"
        para="speak Up is a quick and convenient online test to help higher
            education institutions and employers check the English levels
            of individuals and groups of candidates."
        paraStyle="text-[18px] text-[#404040]"
      />
      <FeatureCardWithImage
        img={Img2}
        sectionStyle="flex-row-reverse "
        heading="Together we inspire learners to go further"
        headingStyle="text-[32px] font-bold text-[#1D1D1D]"
        para="Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you. at the end you will get recommendations on how to improve your English.
        Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you"
        paraStyle="text-[18px] text-[#404040]"
      />

      {/* Courses Section */}

      <section className="">
        <div className=" px-[24px]  ">
          <h2 className="text-[#163B8D] text-[40px] font-bold  ">
            Popular Course
          </h2>
          <div>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
