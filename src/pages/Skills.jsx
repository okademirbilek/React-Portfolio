import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import data from "../skillsData";
import { useImage } from "../context/ImageContext";
import Transition from "../components/Transition";
import Loader from "../components/Loader";

import "../../serviceWorker";

const variantLogo = {
  hover: {
    scale: 1.3,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const variantText = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const data = [
  { skill: "React" },
  { skill: "Vite" },
  { skill: "Sass" },
  { skill: "JavaScript" },
  { skill: "HTML5" },
  { skill: "CSS3" },

  { skill: "BootStrap" },
  { skill: "ThreeJs" },
  { skill: "RestAPI" },
  { skill: "Firebase" },
  { skill: "Blender" },
];

export default function Skills() {
  // const preloadedImages = useImage();
  const [cachedImages, setCachedImages] = useState([]);
  // console.log("imagesArray", cachedImages);
  // console.log(getCachedImage);
  const [shouldRender, setShouldRender] = useState(false);

  //fetchhh
  useEffect(() => {
    async function fetchCachedImages() {
      const imageUrls = [
        "/src/assets/react.svg",
        "/src/assets/vite.svg",
        "/src/assets/sass.png",
        "/src/assets/js.png",
        "/src/assets/html.png",
        "/src/assets/css.png",
        "/src/assets/boot.png",
        "/src/assets/three.png",
        "/src/assets/api.png",
        "/src/assets/firebase.png",
        "/src/assets/blender.png",
      ];

      const cachedImagesArray = [];

      for (const imageUrl of imageUrls) {
        const cachedResponse = await self.getCachedImage(imageUrl);

        if (cachedResponse) {
          const blob = await cachedResponse.blob();
          const dataUrl = URL.createObjectURL(blob);
          cachedImagesArray.push({ url: imageUrl, dataUrl });
        }
      }

      setCachedImages(cachedImagesArray);
    }

    fetchCachedImages();
  }, []);

  // const handleImageLoad = (url) => {
  //   console.log(url);
  // };

  const skillsElement = cachedImages.map((item, index) => {
    return (
      <div
        key={index}
        // className="col-xs-12 col-2-md col-3-lg display-f justify-center fd-c align-center "
        className="container display-f justify-center col-xs-12 col-2-md col-3-lg gap-0 gaps  "
      >
        <div className="row display-f justify-space-around align-center fd-c">
          <motion.img
            src={item.url}
            className="s-logo cursor-p br-sm"
            variants={variantLogo}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            loading="eager"
            // onLoad={() => handleImageLoad(item.url)}
          ></motion.img>
          <motion.h2
            variants={variantText}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {data[index].skill}
          </motion.h2>
        </div>
      </div>
    );
  });
  return (
    <motion.div
      className="container mt-2 mb-2 vh-90"
      // initial={{ scaleY: 0 }}
      // animate={{ scaleY: 1 }}
      // transition={{ duration: 1 }}
      // onAnimationComplete={() => setShouldRender(true)}
    >
      {/* <h1 className="display-f justify-center mb-1">Skills</h1> */}

      <div className="row skills display-f justify-center gaps">
        {cachedImages.length > 0 ? (
          skillsElement
        ) : (
          <div className="container display-f  align-center justify-center fd-c">
            <p>Loading images...</p>
            <Loader />
          </div>
        )}
      </div>
    </motion.div>
  );
}
