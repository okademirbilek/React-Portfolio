import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variantTitle = {
  hidden: {
    y: "-250",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const variantBox = {
  visible: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      times: [0, 0.3, 0.6, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    // color: "#DDA56A",
    color: "#fc5241",
    scale: "1.3",
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="title-container display-f justify-center ">
          <motion.h2
            className="site-title"
            variants={variantTitle}
            initial="hidden"
            animate="visible"
            style={{ zIndex: 1 }}
          >
            Portfolio
          </motion.h2>
          <motion.div
            className="box"
            variants={variantBox}
            animate="visible"
          ></motion.div>
        </div>
        <div className="row gap-3">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
