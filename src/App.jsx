import "./App.css";
import Success from "./components/success/success";
import Gallerypage from "./pages/Gallerypage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import {RingLoader} from "react-spinners";


function App() {

  const [Loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  } , []);

  return (
    <Router>
      {/* Display the loader when Loading state is true */}
      {Loading ? (
        <div className="loader-container" style={{display:"flex",justifyContent: "center", alignItems: 'center', textAlign: "center", width: "100%", height: "100vh"}}>
          <RingLoader color={"#002EFF"} loading={Loading} size={150}/>
        </div>
      ) : (
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Gallerypage />} path="/gallery" />
          <Route element={<Success />} path="/success" />
        </Routes>
      )}
    </Router>
  );
}


export default App;
