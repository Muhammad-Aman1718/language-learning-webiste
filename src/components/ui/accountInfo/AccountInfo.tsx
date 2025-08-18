import React, { useState } from "react";
import ProfileInput from "./ProfileInput";
import PreviousRoute from "../../layout/PreviousRoute";

const AccountInfo: React.FC = () => {
  const [edit, setEdit] = useState(false);

  const handleToggle = () => {
    setEdit(!edit);
  };

  return (
    <div className="flex-1 text-end bg-white p-8  max-md:p-5 ">
      <PreviousRoute title="Account Information" />

      <h2 className="text-2xl text-start font-bold text-[#2563EB] mb-6 max-md:hidden ">
        Account Information
      </h2>

      <div>
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
            inputType="tel"
          />
        </div>
        {edit && (
          <div className="mt-5 space-y-4">
            <h3 className="text-[#0C0C0C] font-bold text-start  ">
              Change Password
            </h3>

            <ProfileInput
              label="Current password"
              placeholder=""
              inputType="text"
            />
            <ProfileInput
              label="New password"
              placeholder=""
              inputType="text"
            />
            <ProfileInput
              label="Re-enter new password"
              placeholder=""
              inputType="text"
            />
          </div>
        )}
      </div>

      {edit ? (
        <button
          onClick={handleToggle}
          className="mt-4  bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700  max-md:w-full "
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleToggle}
          className="mt-4  bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700  max-md:w-full "
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default AccountInfo;
