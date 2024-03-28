import "./App.css";
import "./index.css"; // Path: src/index.css
import Success from "./components/success/success";
import Gallerypage from "./pages/Gallerypage";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Eventpage from "./pages/Eventpage";
import Contactpage from "./pages/Contactpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

function App() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      {/* Display the loader when Loading state is true */}
      {Loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <RingLoader color={"#cacbcf"} loading={Loading} size={140} />
        </div>
      ) : (
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Gallerypage />} path="/gallery" />
          <Route element={<Success />} path="/success" />
          <Route element={<Aboutpage />} path="/about" />
          <Route element={<Eventpage />} path="/event" />
          <Route element={<Contactpage />} path="/contact" />
        </Routes>
      )}
    </Router>
  );
}

export default App;
