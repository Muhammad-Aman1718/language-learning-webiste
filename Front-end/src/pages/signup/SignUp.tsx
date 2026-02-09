import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { NavLink } from "react-router";
import AuthImg from "../../assets/authImg.avif";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   console.log("Login attempt:", formData);
  // };

  return (
    <div className="flex items-center justify-center  md:my-[56px] ">
      <div className="w-full max-w-[1015px] md:h-[795px] md:rounded-[10px]  overflow-hidden grid grid-cols-1 md:grid-cols-2 md:bg-[#E9EFFD] md:mx-7">
        {/* Left Side - Image */}
        <div className="relative h-64 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:rounded-l-[10px] "
            style={{
              backgroundImage: `url(${AuthImg})`,
            }}
          />
          <div className="relative z-10 p-8 max-md:p-4">
            <h1 className="text-[20px] max-md:text-[14px] text-[#282828] font-medium  ">
              Welcome, Looks like
              <br />
              you're new here!
            </h1>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className=" w-full max-md:max-w-[280px] mx-auto  flex items-center justify-center bg-[#E9EFFD] p-2.5 md:p-8 max-md:mt-[30px] max-md:mb-[40px] max-md:rounded-[8px]  ">
          <div className="   w-full max-w-[339px] flex flex-col gap-y-3 ">
            {/* Header */}
            {/* <div className=""> */}
            <h2 className="text-[40px] font-bold text-[#0C0C0C] mb-4 ">
              Sign Up
            </h2>
            {/* </div> */}

            {/* Form */}
            <div className="flex flex-col gap-y-4">
              {/* Email Input */}
              <div className=" flex flex-col   ">
                <label className="text-sm  text-[#282828] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="text"
                    // value={formData.email}
                    // onChange={handleInputChange}
                    placeholder="Enter your Full Name"
                    className="w-full px-4 max-md:px-2 py-2.5 max-md:py-1.5 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD] max-md:placeholder:text-[14px] focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Email Input */}
              <div className=" flex flex-col   ">
                <label className="text-sm  text-[#282828] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="text"
                    // value={formData.email}
                    // onChange={handleInputChange}
                    placeholder="Enter your Email or Username"
                    className="w-full px-4 max-md:px-2 py-2.5 max-md:py-1.5 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD] max-md:placeholder:text-[14px] focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="text-sm  text-[#282828] mb-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    // value={formData.password}
                    // onChange={handleInputChange}
                    placeholder="Enter your Password"
                    className="w-full px-4 max-md:px-2 py-2.5 max-md:py-1.5 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD] max-md:placeholder:text-[14px] focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 max-md:py-1.5 rounded-[8px] cursor-pointer  "
              >
                Sign Up
              </button>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-[#404040] ">
                Already have an Account?{" "}
                <NavLink
                  to="/login"
                  className="text-[#2563EB] text-sm  hover:text-blue-500 font-medium"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
