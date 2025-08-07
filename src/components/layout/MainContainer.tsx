import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

interface MainContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <>
      <Navbar />
      <main className={` ${className} max-w-[1224px] mx-auto  `}>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainContainer;
