import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/ContactUs/contact";
import Footer from "../components/Footer/footer";
import Cards from "../components/CardsMT/CardsMT";
import Team from "../components/Team/Team";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
