interface ProfileInputProps {
  label?: string;
  placeholder?: string;
  inputType?: React.HTMLInputTypeAttribute;
}

const ProfileInput = ({ label, placeholder, inputType }: ProfileInputProps) => {
  return (
    <div className="text-start ">
      <label className="block text-[14px] text-[#0C0C0C] mb-1 ">{label}</label>
      <input
        type={inputType}
        // value="Maya atay"
        placeholder={placeholder}
        className="w-full border border-[#BDBDBD] bg-[#F9F9F9] rounded-[8px] px-[15px] py-[10px] outline-none placeholder:text-[#404040]  placeholder:text-[14px] "
      />
    </div>
  );
};

export default ProfileInput;
