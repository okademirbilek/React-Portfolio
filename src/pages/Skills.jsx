import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Loader from "../components/Loader";

import reactl from "../assets/react.svg";
import vite from "../assets/vite.svg";
import blender from "../assets/blender.png";
import boot from "../assets/boot.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import html1 from "../assets/html.png";
import js from "../assets/js.png";
import api from "../assets/api.png";
import sass from "../assets/sass.png";
import three from "../assets/three.png";

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
      delay: 0.3,
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
    delay: 0.3,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const data = [
  { skill: "React", imgSrc: reactl },
  { skill: "Vite", imgSrc: vite },
  { skill: "Sass", imgSrc: sass },
  { skill: "JavaScript", imgSrc: js },
  { skill: "HTML5", imgSrc: html1 },
  { skill: "CSS3", imgSrc: css },

  { skill: "BootStrap", imgSrc: boot },
  { skill: "ThreeJs", imgSrc: three },
  { skill: "RestAPI", imgSrc: api },
  { skill: "Firebase", imgSrc: firebase },
  { skill: "Blender", imgSrc: blender },
];

export default function Skills() {
  const skillsElement = data.map((item, index) => {
    return (
      <div
        key={index}
        className="container display-f justify-center col-xs-12 col-3-md col-3-lg gaps "
      >
        <div className="row display-f justify-space-around align-center fd-c">
          <motion.img
            src={item.imgSrc}
            className="s-logo cursor-p br-sm"
            variants={variantLogo}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            loading="eager"
          ></motion.img>
          <motion.h2
            variants={variantText}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* {data[index].skill} */}
            {item.skill}
          </motion.h2>
        </div>
      </div>
    );
  });
  return (
    <motion.div className="skills-container container ">
      <div className="row skills display-f justify-center gaps ">
        {/* {cachedImages.length > 0 ? (
          skillsElement
        ) : (
          <div className="container display-f  align-center justify-center fd-c">
            <p>Loading images...</p>
            <Loader />
          </div>
        )} */}
        {skillsElement}
      </div>
    </motion.div>
  );
}
