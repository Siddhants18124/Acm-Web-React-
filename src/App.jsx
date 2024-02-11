import "./App.css";
import Success from "./components/success/success";
import Gallerypage from "./pages/Gallerypage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Gallerypage />} path="/gallery" />
        <Route element={<Success/>} path="/success" />
        {/* <Route element={<Error />} path="*" /> */}
      </Routes>
    </Router>
  );
}

export default App;
