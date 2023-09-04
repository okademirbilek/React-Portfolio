import React from "react";
import "../css/index.css";
import { motion } from "framer-motion";
import mainImg from "../assets/Removal-565.png";

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

export default function Home() {
  return (
    <div className="home">
      <motion.img
        className="mainImg"
        variants={variantImage}
        initial="hidden"
        animate="visible"
        exit="exit"
        src={mainImg}
      />
      <div className="container  display-f  br-lg">
        <motion.div
          className="main display-f br-lg p-2  mt-15 "
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            <strong>Front end </strong> Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            eveniet? Libero at natus repellendus assumenda molestias quos!
            Architecto laudantium harum, itaque voluptas ipsum facilis atque
            pariatur doloremque cupiditate autem.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
