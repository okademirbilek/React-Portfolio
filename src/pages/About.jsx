import React from "react";

import { motion } from "framer-motion";

import myImage from "../assets/removed.png";
import splash from "../assets/splash.svg";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import resume from "../assets/okandemirbilekCV.pdf";

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
      // delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const variantLogo = {
  hover: {
    scale: 1.5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
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
        <div className="splash-img-container">
          <motion.img
            title="adobe/Firefly"
            src={myImage}
            alt="author image AI generated by adobe Firefly"
            className="br-full main-img"
            variants={variantImage}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </div>

        <motion.div
          className="display-f gp-1 mt-1 ml-1 social"
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.a
            variants={variantLogo}
            whileHover="hover"
            href="https://www.linkedin.com/in/okan-demirbilek-55b314228/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </motion.a>

          <motion.a
            variants={variantLogo}
            whileHover="hover"
            href="https://github.com/okademirbilek"
            target="_blank"
          >
            <BsGithub size={30} />
          </motion.a>

          <motion.a
            variants={variantLogo}
            whileHover="hover"
            className="resume"
            href={resume}
            download="Resume"
          >
            Cv
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
