import "./App.css";
import Gallerypage from "./pages/Gallerypage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Gallerypage />} path="/gallery" />
        {/* <Route element={<Error />} path="*" /> */}
      </Routes>
    </Router>
  );
}

export default App;
