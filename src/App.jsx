import react, { useEffect } from "react";
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
import ParticlesContainer from "./components/ParticlesContainer";
import NotFound from "./pages/NotFound";
import { SnackbarProvider } from "notistack";

import "../serviceWorker";

// import reactl from "./assets/react.svg";
// import vite from "./assets/vite.svg";
// import blender from "./assets/blender.png";
// import boot from "./assets/boot.png";
// import css from "./assets/css.png";
// import firebase from "./assets/firebase.png";
// import html1 from "./assets/html.png";
// import js from "./assets/js.png";
// import api from "./assets/api.png";
// import sass from "./assets/sass.png";
// import three from "./assets/three.png";

function App() {
  //Get location information
  const location = useLocation();

  // const data = [
  //   { skill: "React", imgSrc: reactl },
  //   { skill: "Vite", imgSrc: vite },
  //   { skill: "Sass", imgSrc: sass },
  //   { skill: "JavaScript", imgSrc: js },
  //   { skill: "HTML5", imgSrc: html1 },
  //   { skill: "CSS3", imgSrc: css },

  //   { skill: "BootStrap", imgSrc: boot },
  //   { skill: "ThreeJs", imgSrc: three },
  //   { skill: "RestAPI", imgSrc: api },
  //   { skill: "Firebase", imgSrc: firebase },
  //   { skill: "Blender", imgSrc: blender },
  // ];
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("../serviceWorker.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  // useEffect(() => {
  //   preloadImages(data);
  // }, []);

  return (
    //Animate presence for routing animations exit
    // <ImageProvider preloadImages={data}>
    <div className="backColor  vh-100">
      {location.key === "default" && !location.pathname === "/" ? null : (
        <Header />
      )}
      {location.pathname === "/" && <ParticlesContainer />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <SnackbarProvider autoHideDuration={1500} />
    </div>
  );
}

export default App;
