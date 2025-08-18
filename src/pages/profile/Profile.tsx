import { useState } from "react";
import Sidebar from "../../components/shared/SideBar";
import AccountInfo from "../../components/ui/accountInfo/AccountInfo";

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState("settings");

  return (
    <div className=" flex h-full max-md:w-full ">
      <div className="max-md:w-full">
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      </div>
      <main className="flex-1 p-6 max-md:hidden ">
        {activeMenu === "settings" && <AccountInfo />}
        {/* Add other menu components here if needed */}
      </main>
    </div>
  );
};

export default Profile;
