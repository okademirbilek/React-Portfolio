import React from "react";
import "../css/index.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container">
        <motion.div
          className="main display-f vh-90"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <h2 className="mt-15">
            <strong>Front End</strong> Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            quis blanditiis minus asperiores earum dolorum enim recusandae unde,
            commodi possimus.
          </p>
        </motion.div>
      </div>
    </>
  );
}
