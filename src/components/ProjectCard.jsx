// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const variantCon = {
//   exit: {
//     opacity: 0,
//     transition: { ease: "easeInOut" },
//   },
// };

// export default function ProjectCard({ src, index }) {
//   const [imageLoading, setImageLoading] = useState(true);
//   const [pulsing, setPulsing] = useState(true);
//   const [isShown, setIsShown] = useState(false);

//   const imageLoaded = () => {
//     setImageLoading(false);
//     setTimeout(() => setPulsing(false), 1000);
//   };

//   return (
//     <div
//       className={`relative card display-f justify-center col-12-xs col-5-xl col-12-sm ${
//         pulsing ? "pulse" : ""
//       } loadable`}
//       style={{ width: "220px", background: "#ccc", borderRadius: "6px" }}
//       onMouseEnter={() => setIsShown(true)}
//       onMouseLeave={() => setIsShown(false)}
//       onTouchStart={() => setIsShown(true)} // for mobile
//     >
//       <motion.img
//         src={src}
//         initial={{ height: "0.1rem", opacity: 0 }}
//         animate={{
//           height: imageLoading ? "0.1rem" : "200px",
//           opacity: imageLoading ? 0 : 1,
//         }}
//         transition={{
//           height: { delay: 0, duration: 1 },
//           opacity: { delay: 0.5, duration: 1 },
//         }}
//         onLoad={imageLoaded}
//         exit={{ opacity: 0, transition: { ease: "easeOut" } }}
//         style={{ objectFit: "cover" }}
//       />

//       {isShown && (
//         <Link to={`/projects/${index}`} className="overClass">
//           <div className="project-back">Project Page</div>
//         </Link>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variantCon = {
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export default function ProjectCard({ src, index }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 1000);
  };

  return (
    <div
      className={`relative card col-12-xs col-5-xl col-12-sm  display-f justify-center ${
        pulsing ? "pulse" : ""
      } loadable`}
      style={{ width: "220px", background: "#ccc", borderRadius: "6px" }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onTouchStart={() => setIsShown(true)} // for mobile
    >
      <motion.img
        src={src}
        initial={{ height: "0.1rem", opacity: 0 }}
        animate={{
          height: imageLoading ? "0.1rem" : "200px",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 1 } },
          { opacity: { delay: 0.5, duration: 1 } })
        }
        onLoad={imageLoaded}
        exit={{ opacity: 0, transition: { ease: "easeOut" } }}
      ></motion.img>

      {isShown && (
        <Link to={`/projects/${index}`} className="overClass">
          Project Page
        </Link>
      )}
    </div>
  );
}

{
  /* <motion.div
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {
          setIsShown(false);
        }}
        className="hover-effect cursor-p "
        variants={variantCon}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          scaleY: isShown ? 1 : 0,
          opacity: isShown ? 1 : 0,
          zIndex: isShown ? 1 : -1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit="exit"
      >
        <Link to={`/projects/${index}`}>
          <h2 className="">Project Page </h2>
        </Link>
      </motion.div> */
}
