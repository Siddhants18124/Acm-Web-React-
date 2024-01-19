import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Cards from "./components/CardsMT/CardsMT";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cards/>
    </>
  );
}

export default App;
