// components/PricingCard.tsx

import { GoCheckCircleFill } from "react-icons/go";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
  highlight?: boolean; // agar card special highlight ho
}

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  buttonText,
  highlight = false,
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-lg border px-4 py-8 flex flex-col justify-between ${
        highlight
          ? "bg-white shadow-[3px_3px_20px_rgba(146,177,245,0.3)] border-[#D3E0FB]"
          : "bg-white border-[#D3E0FB]"
      }`}
    >
      {/* Title */}
      <div className="text-start ">
        <h3 className="text-[20px] font-bold text-[#1D1D1D]">{title}</h3>
        <p className="text-[#404040] mt-1">{subtitle}</p>

        {/* Price */}
        <div
          className={`mt-4 text-[24px] font-bold p-2  ${
            highlight
              ? "bg-[#92B1F5] text-white"
              : "bg-[#E9EFFD] text-[#1D1D1D]"
          }`}
        >
          {price}
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className=" flex items-center text-sm text-[#404040] ">
              <span className=" text-[#2563EB] flex items-center justify-center mr-2">
                <GoCheckCircleFill className="w-4 h-4 " />
              </span>{" "}
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        className={`mt-8 w-full rounded-md py-3 hover:cursor-pointer  font-medium transition ${
          highlight
            ? "bg-[#2563EB] text-white hover:bg-blue-700"
            : "border border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
