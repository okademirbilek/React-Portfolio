import React from "react";
import { motion } from "framer-motion";
// const variantTransition = {
//   hidden: {
//     scaleY: 0,
//   },
//   visible: {
//     scaleY: 0,
//   },
//   exit: {
//     scaleY: 1,
//     transition: { duration: 1, ease: [0.22, 1, 0, 0.36, 1] },
//   },
// };

const Transition = (OrgComponent) => {
  return () => (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          when: "beforeChildren",
        }}
        // variants={variantLogo}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
      />

      {/* <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      /> */}

      <OrgComponent />
    </>
  );
};

export default Transition;
