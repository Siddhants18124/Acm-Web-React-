import React, { useLayoutEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/ContactUs/contact";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/Team";
import Events from "../components/Events/Events";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useLayoutEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
