import LanguageCard from "../../components/ui/aboutUs/LanguageCard";
import FeatureCardWithImage from "../../components/FeatureCardWithImage";
import USFlag from "../../assets/flags/US.png";
import FranceFlag from "../../assets/flags/GP.png";
import GermanyFlag from "../../assets/flags/DE.png";
import TurkeyFlag from "../../assets/flags/TR.png";
import Img1 from "../../assets/about/image 141.png";
import Img2 from "../../assets/about/image 142.png";
import Img3 from "../../assets/about/image 143.png";

const AboutUs = () => {
  return (
    <section className="bg-white">
      {/* Top Section */}
      <div className="border  bg-blue-600 text-white py-10 px-6">
        <h2 className="text-[56px] font-bold mb-2">About Speak Up </h2>
        <p className=" max-w-[800px] text-[20px]   ">
          SpeakUp is a ground-breaking app for learning English, Turkish, France
          words and improving vocabulary for all speakers of English, from
          native speakers to beginner learners.It makes language learning more
          accessible to everyone around the globe.
        </p>
      </div>

      {/* Middle Text */}
      <div className=" py-8 max-w-4xl mx-auto">
        <p className="mb-4 text-[20px] text-[#1D1D1D]  ">
          Speak Up exists to empower people through languages. Whether you’re
          learning for a new job, new love, or simply a new skill, your path to
          fluency starts here.
        </p>

        <h3 className="font-bold text-[24px] text-[#1D1D1D]   mb-2">
          How Speak Up works:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a href="#" className="text-[#2563EB] text-[20px] font-bold">
              Self-paced study
            </a>
          </li>
          <li className="text-[20px] text-[#1D1D1D]    ">
            Complete your personalised Study Plan, and get friendly reminders
            when it&apos;s time to learn using our expertly designed lessons.
            Benefit from the smart technology in our Review section, which
            highlights what to revise and when. Self-paced studying works
            because you&apos;re in control.
          </li>
        </ul>
      </div>

      {/* Language Cards */}
      <div className=" max-w-[808px] flex items-center justify-between  mx-auto  ">
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
          heading="The accurate English test with 
fast results"
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
    </section>
  );
};

export default AboutUs;
