import React, { useState } from "react";
import { motion } from "framer-motion";

// const hoverVariant = {
//   hidden: {
//     opacity: 0,
//     scaleY: 0,
//   },
//   visible: {
//     scaleY: 1,
//     opacity: 1,
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
//   exit: {
//     scaleY: 0,
//     opacity: 0,
//     transition: { duration: 0.1, ease: "easeInOut" },
//   },
// };

export default function ProjectCard({ src, title }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 1000);
  };

  return (
    <div
      className={`card col-12-xs col-5-xl col-12-sm  display-f justify-center ${
        pulsing ? "pulse" : ""
      } loadable`}
      style={{ width: "220px", background: "#ccc", borderRadius: "22px" }}
    >
      <motion.div
        // onMouseLeave={() => setIsShown(false)}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {
          setIsShown(false);
        }}
        className="hover-effect cursor-p "
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          scaleY: isShown ? 1 : 0,
          opacity: isShown ? 1 : 0,
          zIndex: isShown ? 1 : -1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="">Project Page </h2>
      </motion.div>

      <motion.img
        onHoverStart={(e) => {
          setIsShown(true);
        }}
        onHoverEnd={(e) => {}}
        className="br "
        src={src}
        initial={{ height: "0.1rem", opacity: 0 }}
        // style={{ height: imageLoading ? "6rem" : "auto" }}
        animate={{
          height: imageLoading ? "0.1rem" : "200px",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 1 } },
          { opacity: { delay: 0.5, duration: 1 } })
        }
        onLoad={imageLoaded}
      ></motion.img>
      <p className="card-title">{title}</p>
    </div>
  );
}
