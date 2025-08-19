import { useState } from "react";
import Sidebar from "../../components/shared/SideBar";
import AccountInfo from "../../components/ui/accountInfo/AccountInfo";
import MyCourses from "../../components/ui/myCourses/MyCourses";

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className=" flex h-full max-md:w-full ">
      <div className="max-md:w-full">
        <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      </div>
      <main className="border  flex-1 p-6 max-md:hidden ">
        {activeMenu === "settings" && <AccountInfo />}
        {activeMenu === "myCourses" && <MyCourses />}
        {activeMenu === "myCourses" && <MyCourses />}
        {/* Add other menu components here if needed */}
      </main>
    </div>
  );
};

export default Profile;
