import React, { useEffect, useState, createContext, useContext } from "react";

// import preloadImages from "../utils/utils";

// import reactl from "../assets/react.png";
// import vite from "../assets/vite.svg";
// import blender from "../assets/blender.png";
// import boot from "../assets/boot.png";
// import css from "../assets/css.png";
// import firebase from "../assets/firebase.png";
// import html1 from "../assets/html.png";
// import js from "../assets/js.png";
// import api from "../assets/api.png";
// import sass from "../assets/sass.png";
// import three from "../assets/three.png";

const ImageContext = createContext();

function useImage() {
  return useContext(ImageContext);
}

export default function ImageProvider({ children, preloadImages }) {
  //   const data = [
  //     { skill: "React", imgSrc: reactl },
  //     { skill: "Vite", imgSrc: vite },
  //     { skill: "Sass", imgSrc: sass },
  //     { skill: "JavaScript", imgSrc: js },
  //     { skill: "HTML5", imgSrc: html1 },
  //     { skill: "CSS3", imgSrc: css },

  //     { skill: "BootStrap", imgSrc: boot },
  //     { skill: "ThreeJs", imgSrc: three },
  //     { skill: "RestAPI", imgSrc: api },
  //     { skill: "Firebase", imgSrc: firebase },
  //     { skill: "Blender", imgSrc: blender },
  //   ];

  //   useEffect(() => {
  //     preloadImages(data);
  //   }, []);

  return (
    <ImageContext.Provider value={{ preloadImages }}>
      {children}
    </ImageContext.Provider>
  );
}

export { ImageContext, useImage };
