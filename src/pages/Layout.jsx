import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import ParticlesContainer from "../components/ParticlesContainer";

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
export default function Layout() {
  const location = useLocation();
  return (
    <motion.div
      className={`size ${location.pathname === "/" && "section"} `}
      variants={variantImage}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <Outlet />
        {/* <video
          id="background-video"
          autoPlay
          loop
          muted
          // poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source src="gojoo.mp4" type="video/mp4"></source>
        </video> */}
      </div>
    </motion.div>
  );
}
