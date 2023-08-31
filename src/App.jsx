import react from "react";
import "./css/index.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import ParticlesContainer from "./components/ParticlesContainer";

function App() {
  //Get location information
  const location = useLocation();

  return (
    //Animate presence for routing animations exit
    <div className="image-main size" alt="Designed by starline / Freepik">
      <Header />
      {location.pathname === "/" && <ParticlesContainer />}
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
