import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { NavLink } from "react-router";
import AuthImg from "../../assets/authImg.avif";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:rounded-l-[10px]"
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
            <div className="">
              <h2 className="text-[40px] font-bold text-[#0C0C0C] mb-4 ">
                Log In
              </h2>
              <p className="text-[#282828] text-[18px]   ">
                New to Speak Up?{" "}
                <NavLink
                  to="/sign-up"
                  className="text-[#2563EB] hover:text-blue-500 hover:cursor-pointer text-[18px]"
                >
                  Sign Up
                </NavLink>
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-y-4">
              {/* Email Input */}
              <div className=" flex flex-col   ">
                <label className="text-sm  text-[#282828] mb-1">
                  Email or username
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-none rounded focus:ring-blue-500"
                  />
                  <label className="ml-1 text-[12px] text-[#1D1D1D]">
                    Remember Me
                  </label>
                </div>
                <button className="text-[12px] text-[#1D1D1D] hover:text-blue-600">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                // onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 max-md:py-1.5 rounded-[8px] cursor-pointer  "
              >
                Log In
              </button>

              {/* Social Login */}
              <div className="">
                <div className=" flex items-center justify-between  text-center text-sm text-gray-600 mb-3">
                  <hr className="w-[75px] bg-[#1B105B] opacity-20  " />
                  Or continue with
                  <hr className="w-[75px] bg-[#1B105B] opacity-20  " />
                </div>
                <div className="flex justify-center space-x-3">
                  <button type="button" className="cursor-pointer">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285f4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34a853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#fbbc05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#ea4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </button>
                  <button type="button" className="cursor-pointer">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button type="button" className="cursor-pointer">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <defs>
                        <radialGradient
                          id="instagram-gradient"
                          cx="0.5"
                          cy="1.5"
                          r="1.5"
                        >
                          <stop offset="0%" stopColor="#833ab4" />
                          <stop offset="50%" stopColor="#fd1d1d" />
                          <stop offset="100%" stopColor="#fcb045" />
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#instagram-gradient)"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-[#404040] ">
                Don't have an Account?{" "}
                <NavLink
                  to="/sign-up"
                  className="text-[#2563EB] text-sm  hover:text-blue-500 font-medium"
                >
                  Sign Up
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
