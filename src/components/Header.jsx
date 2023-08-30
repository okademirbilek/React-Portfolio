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

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#fc5241",
    scale: "1.2",
  };
  return (
    <nav className="navbar">
      <div className="container">
        <motion.h2
          className="site-title"
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          style={{ zIndex: 1 }}
        >
          Portfolio
        </motion.h2>
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
