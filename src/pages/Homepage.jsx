import React, { useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/ContactUs/contact";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/Team";
import Events from "../components/Events/Events";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

function Homepage() {

  const lenis = new Lenis({
    duration: 2,
  })

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)



  useLayoutEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
