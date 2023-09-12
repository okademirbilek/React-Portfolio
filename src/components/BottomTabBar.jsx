import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomTabBar() {
  const activeStyle = {
    fontWeight: "bold",
    // textDecoration: "underline",
    color: "#fc5241",
    scale: "1.2",
  };
  return (
    <div className="tab-bar ">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
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
  );
}
