import {} from "react";
import "./css/index.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
