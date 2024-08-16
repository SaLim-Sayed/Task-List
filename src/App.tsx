import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/Layout/MainNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <MainNavbar />
      
        <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       ‚
    </div>
  );
}

export default App;
