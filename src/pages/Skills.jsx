import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    delay: 0.3,
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
  const [cachedImages, setCachedImages] = useState([]);

  //fetchhh
  useEffect(() => {
    async function fetchCachedImages() {
      const imageUrls = [
        "https://okandemirbilek.netlify.app/src/assets/react.svg",
        "https://okandemirbilek.netlify.app/src/assets/vite.svg",
        "https://okandemirbilek.netlify.app/src/assets/sass.png",
        "https://okandemirbilek.netlify.app/src/assets/js.png",
        "https://okandemirbilek.netlify.app/src/assets/html.png",
        "https://okandemirbilek.netlify.app/src/assets/css.png",
        "https://okandemirbilek.netlify.app/src/assets/boot.png",
        "https://okandemirbilek.netlify.app/src/assets/three.png",
        "https://okandemirbilek.netlify.app/src/assets/api.png",
        "https://okandemirbilek.netlify.app/src/assets/firebase.png",
        "https://okandemirbilek.netlify.app/src/assets/blender.png",
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

  const skillsElement = cachedImages.map((item, index) => {
    return (
      <div
        key={index}
        className="container display-f justify-center col-xs-12 col-2-md col-3-lg gaps "
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
    <motion.div className="skills-container container mt-2">
      <div className="row skills display-f justify-center gaps ">
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
