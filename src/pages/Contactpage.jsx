import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/ContactUs/contact";
import Footer from "../components/Footer/footer";

function Contactpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default Contactpage;
