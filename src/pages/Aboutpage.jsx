import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/footer";
import Space from "../components/Space/SpaceThree";

function Aboutpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Space />
      <About />
      <Footer />
    </>
  );
}

export default Aboutpage;
