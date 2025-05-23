import "../css/index.css";
import { motion } from "framer-motion";
import mainImg from "../assets/Removal-565-90.webp";

import { useTypewriter } from "react-simple-typewriter";

import ParticlesContainer from "../components/ParticlesContainer";

const variantTitle = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 150,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

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

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front-End", "Web", "React"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="home">
      <div className="particles-con">
        <ParticlesContainer />
      </div>

      <motion.img
        className="mainImg"
        variants={variantImage}
        initial="hidden"
        animate="visible"
        exit="exit"
        src={mainImg}
        alt="background image anime character gojo satoru"
        title="gojo satoru"
      ></motion.img>
      <div className="container  display-f  br-lg">
        <motion.div
          className="main display-f br-lg p-2"
          variants={variantTitle}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>
            <strong>{text}</strong>
            {/* <span>
              <Cursor cursorBlinking={false} />
            </span> */}{" "}
            Developer
          </h2>
          <p>
            Hi!, My name is Okan Demirbilek. I'm a front-end developer. I design
            and develop modern web applications. Welcome to my portfolio
            website.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
