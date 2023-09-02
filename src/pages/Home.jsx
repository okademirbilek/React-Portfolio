import React from "react";
import "../css/index.css";
import { motion } from "framer-motion";

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

export default function Home() {
  return (
    <>
      <div className="container  display-f mt-5 br-lg">
        <motion.div
          className="main display-f br-lg p-2  "
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            <strong>Front end </strong> Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            rem iure aut rerum id quis suscipit quo eum dolor laboriosam debitis
            consectetur, similique corrupti.
          </p>
        </motion.div>
      </div>
    </>
  );
}
