import React, { useEffect } from "react";
import "./css/index.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { SnackbarProvider } from "notistack";

import ProjectDetail from "./pages/ProjectDetail";

function App() {
  //Get location information
  const location = useLocation();
  const [is404Page, setIs404Page] = React.useState(false);

  return (
    //Animate presence for routing animations exit

    <div className="backColor  vh-100">
      {!location.pathname === "/" ||
      (is404Page && location.key === "default") ? null : (
        <Header />
      )}
      {/* {location.pathname === "/" && <ParticlesContainer />} */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound setIs404Page={setIs404Page} />} />
        </Routes>
      </AnimatePresence>
      <SnackbarProvider autoHideDuration={1500} />
    </div>
  );
}

export default App;
