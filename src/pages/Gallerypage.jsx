import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/footer";

function Gallerypage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}

export default Gallerypage;
