import React from "react";

import { motion } from "framer-motion";

import myImage from "../assets/removed.png";

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
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.3,
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
      <div className="container about-container display-f justify-center   mt-10 br-lg">
        <motion.div
          className="about display-f br-lg p-2 mb-5 "
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            Hi! I'am <strong> Okan Demirbilek</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            rem iure aut rerum id quis suscipit quo eum dolor laboriosam debitis
            consectetur, similique corrupti iste pariatur sit.
          </p>
        </motion.div>
        <div className="xxx">
          <motion.img
            title="https://storyset.com/data"
            src={myImage}
            alt="author image"
            className="br-full"
            variants={variantImage}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </div>

        <div className="display-f gp-1 mt-1 ml-1">
          <a
            href="https://www.linkedin.com/in/okan-demirbilek-55b314228/"
            target="_blank"
          >
            <BsLinkedin size={30} />
          </a>

          <a href="https://github.com/okademirbilek" target="_blank">
            <BsGithub size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
