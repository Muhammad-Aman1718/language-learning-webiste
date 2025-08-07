import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="border border-green-500  text-white flex flex-col items-center justify-between py-6   "
      style={{ background: "linear-gradient(to bottom, #2563EB, #123276)" }}
    >
      <div className="border  w-full max-w-[1224px] mx-auto flex items-center justify-between  ">
        <div className=" ">
          <p className=" text-[16px] text-white mb-2  ">
            Fluency is nothing more than <br /> mastering the 100 most <br />
            important real-life <br /> conversations
          </p>
          <div className=" flex items-center gap-x-3  ">
            <Facebook size={24} fill="white" stroke="0.5" />
            <Linkedin size={24} fill="white" stroke="0.5" />
            <Twitter size={24} fill="white" stroke="0.5" />
            <Youtube size={24} />
          </div>
        </div>
        <div className=" flex flex-col gap-y-3    ">
          <strong className=" font-bold ">Speak up courses</strong>
          <ul className=" flex flex-col gap-y-2 ">
            <li>Learn English</li>
            <li>Learn Turkish</li>
            <li>Learn French</li>
          </ul>
        </div>
        <nav className="flex flex-col gap-y-3">
          <strong className=" font-bold ">Products</strong>
          <ul className=" flex flex-col gap-y-2 ">
            <li>Landing page</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <address className="flex flex-col gap-y-3">
          <strong className=" font-bold ">Contact Information</strong>
          <div className=" flex items-center gap-x-1 ">
            <Smartphone />
            <a href="tel:+923001234567" className="text-[14px] ">
              +92 300 1234567
            </a>
          </div>
          <div className=" flex items-center gap-x-1 ">
            <Mail />{" "}
            <a href="mailto:info@evertech.com" className="text-[14px] ">
              Info@speakup.we
            </a>
          </div>
          <div className=" flex items-center gap-x-1 ">
            <MapPin /> <p className="text-[14px] ">barcelona, C/ de sardenya</p>
          </div>
        </address>
      </div>
      <hr className="w-full  my-6" />
      <div className=" border  w-full max-w-[1224px] mx-auto  flex items-center justify-between  ">
        <div>
          <p className="text-[12px] font-semibold  tracking-[0.8px] ">
            2023 Speakup. All Rights Reserved.
          </p>
        </div>
        <div className=" w-[250px]  flex items-center justify-between ">
          <p className="text-[12px] leading-[180%] font-normal ">
            Terms & Conditions
          </p>
          <p className="text-[12px] leading-[180%] font-normal ">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
