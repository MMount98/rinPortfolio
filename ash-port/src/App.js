import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componeents/Navbar";
import Home from "./componeents/Pages/Home"
import WritingPortfolio from "./componeents/Pages/writingPortfolio"
import About from "./componeents/Pages/About"


import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing-portfolio" element={<WritingPortfolio />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
