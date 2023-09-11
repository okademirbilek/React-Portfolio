import React from "react";

import { motion } from "framer-motion";

import myImage from "../assets/removed.png";
import splash from "../assets/splash.svg";

import { BsLinkedin, BsGithub } from "react-icons/bs";
const variantTitle = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 150,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const variantImage = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      ease: "easeIn",
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export default function About() {
  return (
    <>
      <div className="container about-container display-f justify-center   br-lg">
        <motion.div
          className="about display-f br-lg p-2 mb-3 "
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            Hi! I'm <strong> Okan Demirbilek</strong>
          </h2>
          <p>
            I'm a front-end developer who is trying to learn and implement
            modern web technologies such as React, Sass, Next.js,and TypeScript.
            As a junior developer, I design and maintain optimized responsive
            websites using my creativity, giving importance to performance as
            well as visuality.
          </p>
        </motion.div>
        <div
          className="splash-img-container"
          // variants={variantSplash}
          // initial="hidden"
          // animate="visible"
          // exit="exit"
        >
          {/* <motion.img
            src={splash}
            className="br-full splash"
            variants={variantImage}
            initial="hidden"
            animate="visible"
            exit="exit"
          /> */}
          <motion.img
            title="https://storyset.com/data"
            src={myImage}
            alt="author image"
            className="br-full main-img"
            variants={variantImage}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </div>

        <motion.div
          className="display-f gp-1 mt-1 ml-1"
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <a
            href="https://www.linkedin.com/in/okan-demirbilek-55b314228/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </a>

          <a href="https://github.com/okademirbilek" target="_blank">
            <BsGithub size={30} />
          </a>
        </motion.div>
      </div>
    </>
  );
}
