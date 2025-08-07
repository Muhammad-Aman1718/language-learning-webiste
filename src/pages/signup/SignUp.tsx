import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { NavLink } from "react-router";
import AuthImg from "../../assets/authImg.avif";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center  my-[56px] ">
      <div className="w-full max-w-[1015px]  h-[795px] rounded-[10px] grid grid-cols-1 lg:grid-cols-2 bg-[#E9EFFD] overflow-hidden">
        {/* Left Side - Image */}
        <div className="relative h-64 lg:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-l-[10px]"
            style={{
              backgroundImage: `url(${AuthImg})`,
            }}
          />
          <div className="relative z-10 p-8">
            <h1 className="text-[20px] text-[#282828] font-medium mt-6">
              Welcome, Looks like
              <br />
              you're new here!
            </h1>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="  flex items-center justify-center p-6 lg:p-8">
          <div className="   w-full max-w-[339px] flex flex-col gap-y-3 ">
            {/* Header */}
            <div className="">
              <h2 className="text-[40px] font-bold text-[#0C0C0C] mb-4 ">
                Sign Up
              </h2>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-y-4">
              {/* Full Name Input */}
              <div className=" flex flex-col   ">
                <label className="text-sm  text-[#282828] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    name="fullName"
                    type="text"
                    // value={formData.email}
                    // onChange={handleInputChange}
                    placeholder="Enter your Full Name"
                    className="w-full px-4 py-3 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD] focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
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
                    placeholder="Enter your Email Address"
                    className="w-full px-4 py-3 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD] focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
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
                    className="w-full px-4 py-2.5 pr-10 border bg-white border-[#BDBDBD] rounded-[8px] focus:ring-2 placeholder:text-[#BDBDBD]  focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
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

              {/* Remember Me & Forgot Password */}

              {/* Login Button */}
              <button
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-[8px] cursor-pointer mt-2  "
              >
                Sign Up
              </button>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-[#0C0C0C] ">
                Already have an Account?{" "}
                <NavLink to="/login" className="text-[#2563EB] text-sm  hover:text-blue-500 font-medium">
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

export default SignUp;
