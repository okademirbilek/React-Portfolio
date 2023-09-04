import React from "react";

import { motion } from "framer-motion";
import myImage from "../assets/removed.png";

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
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function About() {
  return (
    <>
      <div className="container about-container display-f vh-80 br-lg">
        <motion.div
          className="about display-f br-lg p-2 "
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
        <motion.img
          title="https://storyset.com/data"
          src={myImage}
          alt="author image"
          className="br-full"
          variants={variantImage}
          initial="hidden"
          animate="visible"
        />
      </div>
    </>
  );
}
