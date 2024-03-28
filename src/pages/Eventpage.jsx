import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/footer";

function Eventpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Events />
      <Footer />
    </>
  );
}

export default Eventpage;
