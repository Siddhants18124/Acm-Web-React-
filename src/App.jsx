import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Cards from "./components/CardsMT/CardsMT";
import Gallery from "./components/Gallery/Gallery";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cards/>
      <Gallery/>
    </>
  );
}

export default App;
