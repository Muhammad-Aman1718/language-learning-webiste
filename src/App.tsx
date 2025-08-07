// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MainContainer from "./components/layout/MainContainer";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <MainContainer>
        <Navbar />
      </MainContainer>
      <hr className=" text-[#BDBDBD] " />

      <Footer />
    </>
  );
}

export default App;
