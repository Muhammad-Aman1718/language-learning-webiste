import { MapPin, Mail, Smartphone } from "lucide-react";
import ContactInfoCard from "../../components/ui/contactUs/ContactInfoCard";
import Input from "../../components/ui/contactUs/Input";

const ContactUs = () => {
  return (
    <section className="w-full">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-20 px-4 text-center text-white  max-md:hidden ">
        <h2 className=" text-[56px]   font-bold">
          Get in<span className="text-white font-medium"> Touch</span>
        </h2>
        <p className="mt-4  text-[20px] text-white font-bold  ">
          Feel free to contact us any time. We will get back to you as <br />{" "}
          soon as we can!
        </p>
      </div>

      {/* Contact Info Boxes */}
      <div className="max-w-[860px] mx-auto flex  justify-between mt-8 max-md:flex-col max-md:items-center max-md:gap-y-6 ">
        <ContactInfoCard
          icon={<Smartphone className=" text-[#2563EB] w-[72px] h-[72px] " />}
          title="Give us a call"
        >
          <p>+12 4650 123</p>
          <p>+14 0691 463</p>
        </ContactInfoCard>

        <ContactInfoCard
          icon={<MapPin className=" text-[#2563EB] w-[72px] h-[72px] " />}
          title="Our main office"
        >
          <p>Agiou Markou 15,</p>
          <p>Athina 105 60, UK.</p>
        </ContactInfoCard>

        <ContactInfoCard
          icon={<Mail className=" text-[#2563EB] w-[72px] h-[72px] " />}
          title="Send us an email"
        >
          <p>mail@speakup.com</p>
        </ContactInfoCard>
      </div>

      {/* Contact Form */}
      <div className="border border-[#F3F7FC]  max-w-[860px] mx-auto  bg-white shadow-[0_4px_12px_0_rgba(140,159,189,0.25)] rounded-lg pt-8 pb-12 mt-10 px-6  max-md:mx-5 max-md:py-3 max-md:px-0 ">
        <h3 className="text-[36px] font-bold text-[#2563EB] text-center mb-6 max-md:text-[20px] ">
          How May We Help You !
        </h3>
        <form className=" w-full flex flex-col items-center space-y-4 max-md:space-y-2 ">
          <div className=" w-full  grid grid-cols-1 md:grid-cols-2 gap-4 max-md:mx-2  max-md:gap-2">
            <Input placeholder="Name" type="text" />
            <Input type="email" placeholder="Email" />
          </div>
          <div className=" w-full  ">
            <Input type="text" placeholder="Subject ..." />
          </div>
          <textarea
            placeholder="Write your problem ..."
            rows={4}
            className="border border-[#404040] bg-[#F9F9F9] rounded-[8px] p-3 w-full placeholder:text-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full max-w-[392px] bg-[#2563EB] hover:bg-blue-700 text-white py-3 rounded-lg transition max-md:py-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.951330255669!2d74.33957841500736!3d31.549670481425774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ec207398ab%3A0xf8a463af69bb7020!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691751000000!5m2!1sen!2s"
          height="250"
          className="w-full"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
