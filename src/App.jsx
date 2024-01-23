import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Cards from "./components/CardsMT/CardsMT";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/ContactUs/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Gallery/> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
