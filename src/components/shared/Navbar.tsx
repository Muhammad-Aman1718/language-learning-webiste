// import { ChevronDown } from "lucide-react";
// import { NavLink } from "react-router";
// import Logo from "../../assets/logo.png";

// const Navbar = () => {
//   return (
//     <header className="border-b  py-[28px] ">
//       <nav className=" border w-full max-w-[1224px] mx-auto  flex justify-between items-center  ">
//         <div>
//           <img src={Logo} alt="Logo" />
//         </div>
//         <div>
//           <ul className="flex items-center gap-x-10 text-[#404040]  ">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? "font-bold text-[#2563EB] " : ""
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/courses"
//                 className={({ isActive }) =>
//                   isActive ? "font-bold text-[#2563EB] " : ""
//                 }
//               >
//                 Courses
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact-us"
//                 className={({ isActive }) =>
//                   isActive ? "font-bold text-[#2563EB] " : ""
//                 }
//               >
//                 Contact us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about-us"
//                 className={({ isActive }) =>
//                   isActive ? "font-bold text-[#2563EB] " : ""
//                 }
//               >
//                 About us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className=" flex items-center gap-x-6 ">
//           {/* <User size={20} color="#404040" /> */}
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               `py-2 px-6 rounded-lg transition-all duration-200 ${
//                 isActive
//                   ? "bg-[#2563EB] text-white font-semibold"
//                   : "border-2 border-[#2563EB] text-[#2563EB] font-medium hover:bg-[#2563EB] hover:text-white"
//               }`
//             }
//           >
//             Login
//           </NavLink>
//           <div className="flex items-center  gap-x-2 ">
//             <span className=" text-[20px]  text-[#404040]  ">EN</span>
//             <ChevronDown size={24} color="#404040" />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b py-[28px] max-md:py-[8px] ">
      <nav className="w-full max-w-[1224px] mx-auto px-5 flex justify-between items-center lg:px-6">
        {/* Mobile Menu Button - Left Side */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-[#404040] hover:text-[#2563EB] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <div className="md:order-first">
          <img src={Logo} alt="Logo" className=" max-sm:w-[100px] " />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-10 text-[#404040] mx-[50px] text-nowrap ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB]" : ""
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB]" : ""
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#2563EB]" : ""
                }
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-x-6">
          {/* Login Button - Hidden on small screens, shown on medium+ */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hidden md:block py-2 px-6 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#2563EB] text-white font-semibold"
                  : "border-2 border-[#2563EB] text-[#2563EB] font-medium hover:bg-[#2563EB] hover:text-white"
              }`
            }
          >
            Login
          </NavLink>

          {/* Language Selector */}
          <div className="flex items-center gap-x-2">
            <span className="text-[20px] text-[#404040]">EN</span>
            <ChevronDown size={24} color="#404040" />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <img src={Logo} alt="Logo" className="h-8" />
                <button
                  onClick={toggleMenu}
                  className="p-2 text-[#404040] hover:text-[#2563EB]"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-6">
                <ul className="space-y-6 text-[#404040]">
                  <li>
                    <NavLink
                      to="/"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-lg ${
                          isActive ? "font-bold text-[#2563EB]" : ""
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-lg ${
                          isActive ? "font-bold text-[#2563EB]" : ""
                        }`
                      }
                    >
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-lg ${
                          isActive ? "font-bold text-[#2563EB]" : ""
                        }`
                      }
                    >
                      Contact us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `block text-lg ${
                          isActive ? "font-bold text-[#2563EB]" : ""
                        }`
                      }
                    >
                      About us
                    </NavLink>
                  </li>
                </ul>

                {/* Mobile Login Button */}
                <div className="mt-8">
                  <NavLink
                    to="/login"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block w-full text-center py-3 px-6 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#2563EB] text-white font-semibold"
                          : "border-2 border-[#2563EB] text-[#2563EB] font-medium hover:bg-[#2563EB] hover:text-white"
                      }`
                    }
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
