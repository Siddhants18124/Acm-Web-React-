import "./App.css";
import Galleypage from "./pages/Galleypage";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Galleypage />} path="/gallery" />
        {/* <Route element={<Error />} path="*" /> */}
      </Routes>
    </Router>
  );
}

export default App;
