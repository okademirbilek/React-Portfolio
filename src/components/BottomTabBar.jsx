import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import {
  BsBookFill,
  BsFillChatQuoteFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

export default function BottomTabBar() {
  const activeStyle = {
    fontWeight: "bold",
    color: "black",
    // scale: "1.1",
    backgroundColor: "#1ac888",
    borderRadius: "10px",
    padding: "3px",
  };
  return (
    <div className="tab-bar ">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>
        <div className="display-f fd-c align-center justify-center">
          <FaHome size={30} />
          Home
        </div>
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <div className="display-f fd-c align-center justify-center">
          <BsFillPersonFill size={30} />
          About
        </div>
      </NavLink>
      <NavLink
        to="/skills"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <div className="display-f fd-c align-center justify-center">
          <FaTrophy size={30} />
          Skills
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <div className="display-f fd-c align-center justify-center">
          <BsBookFill size={30} />
          Projects
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <div className="display-f fd-c align-center justify-center">
          <BsFillChatQuoteFill size={30} />
          Contact
        </div>
      </NavLink>
    </div>
  );
}
