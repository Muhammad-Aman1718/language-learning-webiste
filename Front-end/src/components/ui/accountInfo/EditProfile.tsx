import ProfileInput from "./ProfileInput";
import PreviousRoute from "../../layout/PreviousRoute";

const EditProfile = () => {
  return (
    <div className="flex-1 text-end bg-white p-8  max-md:p-5 ">
      <PreviousRoute title="Account Information" />

      <h2 className="text-2xl text-start font-bold text-[#2563EB] mb-6 max-md:hidden ">
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
      <div className="space-y-4">
        <h3 className="text-[#0C0C0C]  ">Change Password</h3>

        <ProfileInput
          label="Current password"
          placeholder=""
          inputType="text"
        />
        <ProfileInput label="New password" placeholder="" inputType="text" />
        <ProfileInput
          label="Re-enter new password"
          placeholder=""
          inputType="text"
        />
      </div>

      <button className="mt-4  bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700  max-md:w-full ">
        Save
      </button>
    </div>
  );
};

export default EditProfile;
