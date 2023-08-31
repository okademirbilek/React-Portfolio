import React, { useState, useIntersectionObserver } from "react";
import { motion } from "framer-motion";
import data from "../skillsData";

const variantLogo = {
  hover: {
    scale: 1.3,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const variantText = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export default function Skills() {
  const skillsElement = data.map((item, index) => {
    return (
      <div
        key={index}
        // className="col-xs-12 col-2-md col-3-lg display-f justify-center fd-c align-center "
        className="container display-f col-xs-12 col-2-md col-3-lg gap-0 "
      >
        <div className="row display-f justify-space-around align-center fd-c">
          <motion.img
            src={item.imgSrc}
            className="s-logo cursor-p"
            variants={variantLogo}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            loading="lazy"
            // onLoad={handleImageLoad}
          ></motion.img>
          <motion.h2
            variants={variantText}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {item.skill}
          </motion.h2>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-2 mb-2 vh-90">
      {/* <h1 className="display-f justify-center mb-1">Skills</h1> */}
      <div className="row skills display-f justify-center">{skillsElement}</div>
    </div>
  );
}

// [
//   { skill: "React", imgSrc: "react.png" },
//   { skill: "Vite", imgSrc: "vite.svg" },
//   { skill: "Sass", imgSrc: "sass.png" },
//   { skill: "JavaScript", imgSrc: "js.png" },
//   { skill: "HTML5", imgSrc: "html.png" },
//   { skill: "CSS3", imgSrc: "css.png" },

//   { skill: "BootStrap", imgSrc: "boot.png" },
//   { skill: "ThreeJs", imgSrc: "three.png" },
//   { skill: "RestAPI", imgSrc: "api.png" },
//   { skill: "Firebase", imgSrc: "firebase.png" },
//   { skill: "Blender", imgSrc: "blender.png" },
// ]
