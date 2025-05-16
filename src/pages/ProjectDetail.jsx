import React, { Suspense, useState, useEffect } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import projectData from "../projects";

import LazyIcon from "../components/LazyIcon";

import { GiReturnArrow } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { RxVercelLogo } from "react-icons/rx";

const variantCon = {
  hidden: {
    scaleY: 0,
    scaleX: 0,
  },
  visible: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      // ease: "easeIn",
      // delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    scaleY: 0,
    scaleX: 0,
    transition: { ease: "easeInOut" },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProjectDetail() {
  const params = useParams();

  const navigate = useNavigate();

  //preventing when user gives string to page other than number
  // useEffect(() => {
  //   console.log("id is changed");
  //   console.log(params.id);
  //   if (isNaN(parseInt(params.id))) {
  //     navigate("/projects");
  //     console.log("bad syntex");
  //   } else {
  //     console.log("keep going on ");
  //   }
  // }, [params.id]);

  const data = projectData.filter((item) => item.id === params.id)[0];
  const [IconsArray, setIconsArray] = useState([]);

  //importing logos with lazyIcon component which i created, it loads logos with react lazy
  useEffect(() => {
    const iconElements = data.logos.map((item, index) => {
      return <LazyIcon iconName={item} key={index} />;
    });
    setIconsArray(iconElements);
  }, []);

  return (
    <motion.div
      variants={variantCon}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.section className="container project-detail mt-3 back  br-lg p-3">
        <Link className="bg-secondary p-1 br-sm" to="/projects">
          <motion.span variants={item}>
            Back to Projects <GiReturnArrow size={20} />
          </motion.span>
        </Link>

        <motion.div
          className="social-con row mt-2 display-f  align-center "
          variants={item}
        >
          <h1 className="">{data.title} </h1>
          <Link
            className="site display-f justify-center gp-1  br-sm "
            to={data.github}
            target="_blank"
            aria-label="Check Project Github Page"
          >
            <FaGithub size={30} /> <h4>Github</h4>
          </Link>
          <Link
            className="site display-f justify-center gp-1  br-sm "
            href={data.website}
            to="_blank"
            aria-label="Check Project Live Page"
          >
            {data.provider === "netlify" ? (
              <BiLogoNetlify size={30} />
            ) : (
              <RxVercelLogo size={30} />
            )}{" "}
            <h4>Website</h4>
          </Link>
        </motion.div>

        <div className="row display-f gp-1 mt-2">
          {/* <ImageLoad src={data.images[0]} alt={data.title} size={540} />
          <ImageLoad src={data.images[1]} alt={data.title} size={540} /> */}

          <motion.img
            width={540}
            className="bg-cardColor br-lg  mt-1"
            src={data.images[0]}
            alt={data.title}
            variants={item}
          />
          <motion.img
            width={540}
            className="bg-cardColor br-lg  mt-1"
            src={data.images[1]}
            alt={data.title}
            variants={item}
          />
        </div>
        <motion.h2 className="mt-2" variants={item}>
          Project Summary
        </motion.h2>
        <motion.p className="ml-1 mt-1 mb-2" variants={item}>
          {data.summary}
        </motion.p>
      </motion.section>

      <motion.section
        className="container special back  display-f fd-c p-3  br-lg mt-4 "
        variants={item}
      >
        <h2>Tech Stack</h2>
        <div className="back p-2 br-lg display-f gp-1 mt-1 row justify-center align-center">
          {IconsArray.map((item) => item)}
        </div>
        <h2 className="mt-2">Experience</h2>
        <p className="mt-1 ml-1">{data.experience}</p>
      </motion.section>
    </motion.div>
  );
}
