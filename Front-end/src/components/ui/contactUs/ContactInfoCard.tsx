interface ContactInfoCardProps {
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}

const ContactInfoCard = ({ icon, title, children }: ContactInfoCardProps) => {
  return (
    <div className="flex flex-col items-center  max-w-[230px] w-full py-[28px]  border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-[#2563EB] text-4xl mb-3">{icon}</div>
      <h3 className="text-[20px] text-nowrap font-bold text-[#0C0C0C] mb-2">
        {title}
      </h3>
      <div className=" text-[#282828] text-center">{children}</div>
    </div>
  );
};

export default ContactInfoCard;
