import React, { useEffect, useState } from "react";
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
import BottomTabBar from "./components/BottomTabBar";

function App() {
  //Get location information
  const location = useLocation();

  //store the current size of window
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      // height: window.innerHeight,
    };
  }

  //check windowsize for bottom navigation bar
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    // clean up function  for unmount component
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    //Animate presence for routing animations exit

    <div className="backColor  vh-100">
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {screenSize.width < 960 ? <BottomTabBar /> : null}
      <SnackbarProvider autoHideDuration={1500} />
    </div>
  );
}

export default App;
