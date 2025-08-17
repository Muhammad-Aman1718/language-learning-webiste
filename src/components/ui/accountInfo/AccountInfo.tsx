import React from "react";
import ProfileInput from "./ProfileInput";

const AccountInfo: React.FC = () => {
  return (
    <div className="flex-1 text-end bg-white p-8 ">
      <h2 className="text-2xl text-start font-bold text-[#2563EB] mb-6">
        Account Information
      </h2>

      <div className="space-y-4">
        <ProfileInput
          label="Username"
          placeholder="Maya atay"
          inputType="text"
        />
        <ProfileInput
          label="Email"
          placeholder="mayaatay4400@gmail.com"
          inputType="text"
        />
        <ProfileInput
          label="Phone number"
          placeholder="536608300"
          inputType="text"
        />
      </div>

      <button className="mt-4  bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        Edit
      </button>
    </div>
  );
};

export default AccountInfo;
