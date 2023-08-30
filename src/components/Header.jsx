import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#fc5241",
  };
  return (
    <nav className="navbar">
      <div className="container">
        <h2 class="site-title">Portfolio</h2>
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
