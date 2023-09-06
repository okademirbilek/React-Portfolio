import React from "react";
import ProjectCard from "../components/ProjectCard";
import image1 from "../assets/project.svg";
import { motion } from "framer-motion";
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

const variantTitle = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

export default function Projects() {
  return (
    <div className="project-container container display-f   justify-center align-center mt-5  card-border pb-4 br-lg ">
      <div className=" display-f justify-center align-center fd-c">
        <motion.h1
          className=" mt-4 display-f align-center project-title"
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Projects
        </motion.h1>

        <a href="https://storyset.com/business" target="_blank">
          <motion.img
            src={image1}
            alt="business image "
            title="Image by storyset on Freepik"
            width={400}
            variants={variantImage}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </a>
      </div>

      <div className=" row justify-center align-center mt-4 projects ">
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image14.JPG?raw=true"
          }
          index={1}
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/movie.JPG?raw=true"
          }
          index={2}
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image15.JPG?raw=true"
          }
          index={3}
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/quizzica.JPG?raw=true"
          }
          index={4}
        />
      </div>
    </div>
  );
}
