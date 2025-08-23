import LanguageCard from "../../components/ui/aboutUs/LanguageCard";
import FeatureCardWithImage from "../../components/FeatureCardWithImage";
import TeamCard from "../../components/ui/aboutUs/TeamCard";
import USFlag from "../../assets/flags/US.png";
import FranceFlag from "../../assets/flags/GP.png";
import GermanyFlag from "../../assets/flags/DE.png";
import TurkeyFlag from "../../assets/flags/TR.png";
import Img1 from "../../assets/about/image 141.png";
import Img2 from "../../assets/about/image 142.png";
import Img3 from "../../assets/about/image 143.png";
import AsianWomen from "../../assets/about/asianWomen.png";
import smilingWomen from "../../assets/about/smilingWomen.png";
import handsomeBusinessman from "../../assets/about/handsomeBusinessman.png";

const AboutUs = () => {
  return (
    <section className="bg-white ">
      {/* Top Section */}
      <div className="border  bg-blue-600 text-white py-10 px-6 max-md:px-5 ">
        <h2 className="text-[56px] font-bold mb-2 max-md:text-[16px]  ">
          About Speak Up{" "}
        </h2>
        <p className=" max-w-[800px] text-[20px] max-md:text-[12px]  ">
          SpeakUp is a ground-breaking app for learning English, Turkish, France
          words and improving vocabulary for all speakers of English, from
          native speakers to beginner learners.It makes language learning more
          accessible to everyone around the globe.
        </p>
      </div>

      {/* Middle Text */}
      <div className=" py-8 max-w-4xl mx-auto max-md:px-5 ">
        <p className="mb-4 text-[20px] text-[#1D1D1D] max-md:text-[11px] ">
          Speak Up exists to empower people through languages. Whether
          you&apos;re learning for a new job, new love, or simply a new skill,
          your path to fluency starts here.
        </p>

        <h3 className="font-bold text-[24px] text-[#1D1D1D] mb-2 max-md:text-[16px] ">
          How Speak Up works:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-[#2563EB] text-[20px] font-bold max-md:text-[12px] ">
            Self-paced study
          </li>
          <li className="text-[20px] text-[#1D1D1D] max-md:text-[12px]   ">
            Complete your personalised Study Plan, and get friendly reminders
            when it&apos;s time to learn using our expertly designed lessons.
            Benefit from the smart technology in our Review section, which
            highlights what to revise and when. Self-paced studying works
            because you&apos;re in control.
          </li>
        </ul>
      </div>

      {/* Language Cards */}
      <div className=" max-w-[808px] flex items-center justify-between  mx-auto max-md:flex-col max-md:mb-10  ">
        <LanguageCard imgSrc={USFlag} title="English" />
        <LanguageCard imgSrc={FranceFlag} title="France" />
        <LanguageCard imgSrc={GermanyFlag} title="Germany" />
        <LanguageCard imgSrc={TurkeyFlag} title="Turkish" />
      </div>

      <section>
        <FeatureCardWithImage
          sectionStyle="flex-row-reverse items-center "
          divStyle="text-center"
          img={Img1}
          heading="The accurate English test with fast results"
          headingStyle=" text-[#282828] text-[24px] font-bold  "
          para="SPEAK UP is a quick and convenient online test to help higher education institutions and employers check the English levels of individuals and groups of candidates. It combines the latest AI technology with the reliability and quality you expect from Speak Up."
          paraStyle="text-[#282828] "
        />
        <FeatureCardWithImage
          sectionStyle=" items-center "
          divStyle="text-center"
          img={Img2}
          heading="our path to learning English, step by step"
          headingStyle="text-[#282828] text-[24px] font-bold"
          para="effective and rewarding. Our unique approach encourages continuous progression with a clear path to improve language skills. We have qualifications for schools, general and higher education, and business."
          paraStyle="text-[#282828] "
        />
        <FeatureCardWithImage
          sectionStyle="flex-row-reverse items-center "
          divStyle="text-center"
          img={Img3}
          heading="Together we inspire learners to go further"
          headingStyle="text-[#282828] text-[24px] font-bold"
          para="Our range of free teaching resources, lesson plans and activities is designed to help you prepare your students for our exams and tests. We also have a range of teaching qualifications, courses and support to help you develop as a teacher."
          paraStyle="text-[#282828] "
        />
      </section>

      <section className="bg-white">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 flex items-center gap-6 max-md:px-5">
          <img src={Img1} alt="Improve English" className="w-16 h-16" />
          <div>
            <h2 className="text-[24px]  font-bold max-md:text-[16px] ">
              So do you want to improve your English?
            </h2>
            <p className="text-[20px] max-md:text-[12px]">
              Practice material and learning resources to help you improve your
              English
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="px-6 py-8 max-w-5xl mx-auto max-md:px-5 ">
          <h3 className="font-bold text-[#1D1D1D] text-[24px] mb-2 max-md:text-[20px] ">
            Our products, platforms and websites:
          </h3>
          <p className="mb-6 text-[20px] text-[#1D1D1D] max-md:text-[12px] ">
            Platform and website may vary, but our teams are working to enhance
            accessibility throughout. For more detailed information about the
            accessibility of specific products, please refer to the
            documentation linked from our Accessibility Directory below.
          </p>

          <h4 className="font-bold text-[#1D1D1D] text-[24px] mb-2 max-md:text-[20px]">
            Reading Experience:
          </h4>
          <ul className="list-disc list-inside space-y-1 mb-6 text-[20px] text-[#1D1D1D] max-md:text-[12px]">
            <li>Listen to all of the website using a screen reader...</li>
            <li>Understand the meaning of images and icons...</li>
            <li>Request alternative text for specific images...</li>
            <li>Understand the function of all form elements...</li>
          </ul>

          <h4 className="font-bold text-[#1D1D1D] text-[24px] mb-2 max-md:text-[20px]">
            Available formats:
          </h4>
          <p className="text-[20px] text-[#1D1D1D] mb-6 max-md:text-[12px] ">
            For optimal reading experience we recommend accessing content in
            HTML or EPUB format where available. These formats help to ensure
            text reflows correctly...
          </p>
        </div>

        {/* Meet Our Team */}
        <div className="text-center mb-8">
          <h3 className="text-[32px] text-[#1D1D1D] font-bold max-md:text-[24px] ">
            Meet Our Team
          </h3>
          <p className="text-[#404040] max-w-4xl mx-auto max-md:text-[12px] ">
            Our expert team is made up of creatives with technical knowhow,
            strategists who think outside the box, and developers who push
            innovation
          </p>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 pb-12 max-md:px-5 max-md:place-items-center   ">
          <TeamCard
            imgSrc={AsianWomen}
            name="Asli Sora"
            position="President CEO"
            email="soraasli@speakupeducation.com"
          />
          <TeamCard
            imgSrc={smilingWomen}
            name="Asli Sora"
            position="President CEO"
            email="soraasli@speakupeducation.com"
          />
          <TeamCard
            imgSrc={handsomeBusinessman}
            name="Asli Sora"
            position="President CEO"
            email="soraasli@speakupeducation.com"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
