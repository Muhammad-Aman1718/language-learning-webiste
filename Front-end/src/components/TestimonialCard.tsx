// components/TestimonialCard.tsx

interface TestimonialCardProps {
  stars: number;
  text: string;
  name: string;
  date: string;
}

const TestimonialCard = ({ stars, text, name, date }: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-sm mx-auto">
      {/* Stars */}
      <div className="text-yellow-400 text-lg mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-[#404040] text-[18px] ">"{text}"</p>

      {/* Name */}
      <p className="mt-3 font-bold text-[#282828] text-sm">
        {name} <span className="text-[#282828] font-normal  text-[12px] ">, {date}</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
