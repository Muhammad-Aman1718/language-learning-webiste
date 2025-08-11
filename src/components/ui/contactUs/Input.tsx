interface InputProps {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

const Input = ({ placeholder, type }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-[#404040]  w-full bg-[#F9F9F9] rounded-[8px] p-3 placeholder:text-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-blue-400 "
      />
    </div>
  );
};

export default Input;
