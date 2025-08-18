import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Courses from "./pages/courses/Courses";
import MainContainer from "./components/layout/MainContainer";
import SignUp from "./pages/signup/SignUp";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ConfirmNewPassword from "./pages/confirmNewPassword/ConfirmNewPassword";
import Profile from "./pages/profile/Profile";
import AccountInfo from "./components/ui/accountInfo/AccountInfo";
import EditProfile from "./components/ui/accountInfo/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />, // Wrapper with Navbar + Footer
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "confirm-new-password",
        element: <ConfirmNewPassword />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/account-info",
        element: <AccountInfo />,
      },
      {
        path: "profile/edit",
        element: <EditProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
