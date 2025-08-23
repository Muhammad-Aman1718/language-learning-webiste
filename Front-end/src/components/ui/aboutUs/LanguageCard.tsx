import React from "react";

interface LanguageCardProps {
  imgSrc: string;
  title: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col border-2 border-[#BDBDBD] rounded-[16px] px-[36px] py-[32px] ">
      <img src={imgSrc} alt={title} className="  mb-[18px] " />
      <p className=" text-[#0C0C0C] text-[20px] text-center  ">{title}</p>
    </div>
  );
};

export default LanguageCard;
