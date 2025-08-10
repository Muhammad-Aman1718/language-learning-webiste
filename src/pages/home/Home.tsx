// import { NavLink } from "react-router";
// import { ChevronRight } from "lucide-react";
// import { plans, testimonials } from "../../constant/data";
// import Img from "../../assets/Rectangle.png";
// import Img1 from "../../assets/img.png";
// import Img2 from "../../assets/image 1.png";
// import Img3 from "../../assets/image 231.png";
// import HeroImg from "../../assets/rafiki.png";
// import CourseCard from "../../components/CourseCard";
// import FeatureCardWithImage from "../../components/FeatureCardWithImage";
// import TestimonialCard from "../../components/TestimonialCard";
// import PricingCard from "../../components/PricingCard";

// const Home = () => {
//   return (
//     <main className=" border w-full">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6  ">
//         <div className="  px-6   flex flex-col md:flex-row items-center">
//           {/* Left Text */}
//           <div className="flex-1 mb-6 md:mb-0">
//             <h1 className="text-[44px]  font-bold leading-snug">
//               Studying Online is now <br /> much easier
//             </h1>
//             <p className="text-[20px]  mt-4">
//               Speak Up is an interesting platform that will teach <br /> you in
//               more an interactive way
//             </p>
//             <button className="mt-6 bg-[#EBAD25] text-white font-medium py-3 px-4 rounded-lg">
//               Let&apos;s Start
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1">
//             <img
//               src={HeroImg} // apna image path yahan dalna
//               alt="Online Study"
//               width={500}
//               height={400}
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* First Info Section */}
//       <section className=" mt-[70px] mb-[30px] px-6  flex items-center justify-between  ">
//         <div className=" border border-[#BDBDBD] rounded-[16px] px-[22px] py-[45px] text-center w-full max-w-[560px]  ">
//           <h1 className=" text-[#2563EB] text-[32px] font-bold mb-6 ">
//             You can learn online and <br /> sit in Your Home
//           </h1>
//           <p className="text-[18px] text-[#404040]  ">
//             speak Up is a quick and convenient online test to help higher
//             education institutions and employers check the English levels of
//             individuals and groups of candidates.
//           </p>
//         </div>
//         <div className="  w-full max-w-[600px]  ">
//           <img src={Img} alt="This is img not showing" className=" mb-8 " />
//           <div className=" flex flex-col gap-y-[9px] ">
//             <h1 className=" text-[#1D1D1D] text-[40px] font-bold  ">
//               You Speak Up To 6 Month Faster Than Now
//             </h1>
//             <p className="text-[#404040] text-[20px] ">
//               Our range of free teaching resources, lesson plans and activities
//               is designed to help you prepare your students for our exams and
//               tests. We also have a range of teaching qualifications, courses
//               and support to help you as a teacher.
//             </p>
//             <div className="border border-[#BDBDBD] rounded-[10px] px-4 py-2.5">
//               <h4 className=" text-[#0C0C0C] text-[14px] font-semibold  ">
//                 Fun Fact
//               </h4>

//               <p className="text-[#404040] text-[14px]  ">
//                 Did you know remember %95 of a massage when it’s watched vs only
//                 10% of what you read try it.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Info Section */}
//       <FeatureCardWithImage
//         img={Img1}
//         sectionStyle="items-start"
//         heading="You can learn online and sit in class"
//         headingStyle="text-[32px] font-bold text-[#1D1D1D]"
//         para="speak Up is a quick and convenient online test to help higher
//             education institutions and employers check the English levels
//             of individuals and groups of candidates."
//         paraStyle="text-[18px] text-[#404040]"
//       />
//       <FeatureCardWithImage
//         img={Img2}
//         sectionStyle="flex-row-reverse items-center  "
//         heading="Together we inspire learners to go further"
//         headingStyle="text-[32px] font-bold text-[#1D1D1D]"
//         para="Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you. at the end you will get recommendations on how to improve your English.
//         Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you"
//         paraStyle="text-[18px] text-[#404040]"
//       />

//       {/* Courses Section */}

//       <section className="mb-10">
//         <div className=" px-[24px]  ">
//           <h2 className="text-[#163B8D] text-[40px] font-bold mb-4  ">
//             Popular Course
//           </h2>
//           <div className=" grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-x-6 gap-y-[48px] ">
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//           </div>
//           <div>
//             <NavLink
//               to=""
//               className=" border border-[#2563EB] rounded-[8px] mt-6 mx-auto  max-w-[300px] py-3  flex items-center justify-center "
//             >
//               <p className=" text-[#2563EB]   ">See all courses</p>
//               <ChevronRight className="text-[#2563EB]  w-6 h-6 " />
//             </NavLink>
//           </div>
//         </div>
//       </section>

//       {/* Test your english */}
//       <section className="   bg-[#F3F7FC] py-10 px-6">
//         <div className="  mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Left Content */}
//           <div className=" flex-1">
//             <h2 className="text-[40px] font-bold text-[#0B1E46] ">
//               Test Your English
//             </h2>
//             <p className="mt-4 text-[20px] font-bold text-[#0B1E46] ">
//               Try our quick, free online tests to find out what your level of
//               English is, and which{" "}
//               <span className="text-[#2563EB] ">SpeakUp</span> English
//               Qualification might be best for you. There are tests suited for
//               every level.
//             </p>
//           </div>

//           {/* Right Button Card */}
//           <div className="  flex-1 flex items-center justify-start ">
//             <div className="  bg-white rounded-[8px] flex items-center justify-center p-2 max-w-[486px] w-full ">
//               <button className="bg-[#2563EB]  text-white w-[70%] py-2 rounded-lg">
//                 Test Your English
//               </button>
//               {/* Blue Rounded Background Shape */}
//             </div>
//           </div>
//         </div>
//       </section>

//       <FeatureCardWithImage
//         img={Img3}
//         sectionStyle="items-center"
//         heading="About Us  Online Group Courses "
//         headingStyle="text-[32px] font-bold text-[#1D1D1D]"
//         para="The learning experiences we create could only come from Cambridge. Our solutions for teaching and assessment are empowering millions of learners everywhere and are built on unique insights from our research, expertise and
//         speak Up is a quick and convenient online test to help higher education institutions and employers and groups of candidates. "
//         paraStyle="text-[20px] text-[#404040]"
//       />

//       {/* Testimonial  section */}

//       <section className="bg-white py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Heading */}
//           <h2 className="text-[44px] font-bold text-[#0C0C0C] ">
//             Here&apos;s what others love about{" "}
//             <span className="text-black">Speak Up</span>
//           </h2>
//           <p className="mt-4 text-[24px] text-[#1D1D1D] ">
//             Our strong community are all learning together. Here’s what some of
//             them say…..
//           </p>

//           {/* Cards */}
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {testimonials.map((t, index) => (
//               <TestimonialCard
//                 key={index}
//                 stars={t.stars}
//                 text={t.text}
//                 name={t.name}
//                 date={t.date}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}

//       <section className="bg-white pt-12 pb-[80px] px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Heading */}
//           <h2 className="text-[44px] font-bold text-[#03032A]  ">
//             Pricing Plan
//           </h2>
//           <p className="text-[#03032A] opacity-90 text-[24px] mb-[32px] ">
//             Choose the right pricing for you and get started
//           </p>

//           {/* Cards */}
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 items-start gap-6">
//             {plans.map((plan, index) => (
//               <PricingCard
//                 key={index}
//                 title={plan.title}
//                 subtitle={plan.subtitle}
//                 price={plan.price}
//                 features={plan.features}
//                 buttonText={plan.buttonText}
//                 highlight={plan.highlight}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;

import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";
import { plans, testimonials } from "../../constant/data";
import Img from "../../assets/Rectangle.png";
import Img1 from "../../assets/img.png";
import Img2 from "../../assets/image 1.png";
import Img3 from "../../assets/image 231.png";
import HeroImg from "../../assets/rafiki.png";
import CourseCard from "../../components/CourseCard";
import FeatureCardWithImage from "../../components/FeatureCardWithImage";
import TestimonialCard from "../../components/TestimonialCard";
import PricingCard from "../../components/PricingCard";

const Home = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 max-md:py-6 ">
        <div className="px-6 max-md:px-5 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-[44px] font-bold leading-snug">
              Studying Online is now <br className="hidden md:block" /> much
              easier
            </h1>
            <p className="text-lg md:text-[20px] mt-4">
              Speak Up is an interesting platform that will teach <br /> you in
              a more interactive way
            </p>
            <button className="mt-6 bg-[#EBAD25] text-white font-medium py-3 px-6 rounded-lg">
              Let&apos;s Start
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={HeroImg}
              alt="Online Study"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* First Info Section */}
      <section className="mt-16 max-md:mt-[32px] mb-8 px-6 max-md:px-0 flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="border border-[#BDBDBD] rounded-[16px] px-6 py-10 text-center w-full lg:max-w-[560px] max-md:py-4  ">
          <h1 className="text-[#2563EB] text-2xl md:text-[32px] font-bold mb-6 max-md:text-[16px] max-md:mb-2 ">
            You can learn online and <br /> sit in Your Home
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#404040]">
            Speak Up is a quick and convenient online test to help higher
            education institutions and employers check the English levels of
            individuals and groups of candidates.
          </p>
        </div>

        <div className="w-full lg:max-w-[600px] max-md:px-5 ">
          <img
            src={Img}
            alt="Learning"
            className="w-full h-auto mb-8 max-md:mb-4 "
          />
          <div className="flex flex-col gap-y-3 max-md:gap-y-2 ">
            <h1 className="text-[24px] md:text-[40px] font-bold text-[#1D1D1D]">
              You Speak Up To 6 Month Faster Than Now
            </h1>
            <p className="text-[#404040] text-[12px] md:text-[20px]">
              Our range of free teaching resources, lesson plans and activities
              is designed to help you prepare your students for our exams and
              tests. We also have a range of teaching qualifications, courses
              and support to help you as a teacher.
            </p>
            <div className="border border-[#bdbdbd] rounded-[10px] px-4 py-2.5 max-md:py-1 ">
              <h4 className="text-[#0C0C0C] text-sm md:text-[14px] font-semibold">
                Fun Fact:
              </h4>
              <p className="text-[#404040] text-[12px] md:text-[14px]">
                Did you know you remember 95% of a message when it&apos;s
                watched vs only 10% of what you read? Try it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureCardWithImage
        img={Img1}
        sectionStyle="items-start  "
        heading="You can learn online and sit in class"
        headingStyle="text-2xl md:text-[32px] font-bold text-[#1D1D1D]"
        para="Speak Up is a quick and convenient online test to help higher education institutions and employers check the English levels of individuals and groups of candidates."
        paraStyle="text-base md:text-[18px] text-[#404040]"
      />
      <FeatureCardWithImage
        img={Img2}
        sectionStyle="flex-col-reverse md:flex-row-reverse items-center gap-6"
        heading="Together we inspire learners to go further"
        headingStyle="text-2xl md:text-[32px] font-bold text-[#1D1D1D]"
        para="Try our quick, free online tests to find out your level of English and which Cambridge English Qualification might be best for you. You’ll get recommendations on how to improve your English."
        paraStyle="text-base md:text-[18px] text-[#404040]"
      />

      {/* Courses Section */}
      <section className="mb-10 px-6  mx-auto max-md:px-0 ">
        <h2 className="text-[#163B8D] text-3xl md:text-[40px] font-bold mb-6 max-md:text-[24px] max-md:px-5  ">
          Popular Course
        </h2>
        <div className="  w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6   ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="flex justify-center mt-6">
          <NavLink
            to=""
            className="border border-[#2563EB] rounded-[8px] px-6 py-3 flex items-center gap-2"
          >
            <p className="text-[#2563EB]">See all courses</p>
            <ChevronRight className="text-[#2563EB] w-6 h-6" />
          </NavLink>
        </div>
      </section>

      {/* Test Your English */}
      <section className="bg-[#F3F7FC] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#0B1E46]">
              Test Your English
            </h2>
            <p className="mt-4 text-lg md:text-[20px] font-bold text-[#0B1E46]">
              Try our quick, free online tests to find out your level of English
              and which <span className="text-[#2563EB]">SpeakUp</span> English
              Qualification might be best for you.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-[8px] flex items-center justify-center p-2 w-full max-w-[486px]">
              <button className="bg-[#2563EB] text-white w-full md:w-[70%] py-2 rounded-lg">
                Test Your English
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureCardWithImage
        img={Img3}
        sectionStyle="items-center"
        heading="About Us Online Group Courses"
        headingStyle="text-2xl md:text-[32px] font-bold text-[#1D1D1D]"
        para="The learning experiences we create could only come from Cambridge. Our solutions for teaching and assessment are empowering millions of learners everywhere."
        paraStyle="text-base md:text-[20px] text-[#404040]"
      />

      {/* Testimonials */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#0C0C0C]">
            Here&apos;s what others love about{" "}
            <span className="text-black">Speak Up</span>
          </h2>
          <p className="mt-4 text-lg md:text-[24px] text-[#1D1D1D]">
            Our strong community is learning together. Here’s what some say…
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-[44px] font-bold text-[#03032A]">
            Pricing Plan
          </h2>
          <p className="text-[#03032A] opacity-90 text-lg md:text-[24px] mb-8">
            Choose the right pricing for you and get started
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
