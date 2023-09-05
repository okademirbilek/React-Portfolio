import React, { Suspense, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import projectData from "../projects";

import LazyIcon from "../components/LazyIcon";

const variantCon = {
  hidden: {
    scaleY: 0,
    scaleX: 0,
  },
  visible: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      ease: "easeIn",
      delay: 0.3,
    },
  },
  exit: {
    scaleY: 0,
    scaleX: 0,
    transition: { ease: "easeInOut" },
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const data = projectData.filter((item) => item.id === params.id)[0];
  const [Icon, setIcon] = useState([]);

  useEffect(() => {
    const iconElements = data.logos.map((item, index) => {
      return <LazyIcon iconName={item} key={index} />;
    });
    setIcon(iconElements);
  }, []);

  return (
    <>
      <motion.div
        className="container project-detail mt-3 bg-secondary vh-80 br-lg p-3"
        variants={variantCon}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Link to="/projects">Back to Projects</Link>
        <h1>{data.title}</h1>
        <div className="container bg-error vh-40">halo</div>
        <p>{data.summary}</p>
      </motion.div>
      <div className="container bg-secondary vh-60 display-f fd-c align-center justify-center br-lg mt-1">
        <div className="bg-backColor p-2 br-lg display-f gp-1 mt-2 row justify-center">
          {Icon.map((item) => item)}
        </div>
        <div className=" row ">
          <ul>
            {data.library.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="container bg-secondary vh-60 display-f fd-c align-center  br-lg mt-1">
        <p>{data.experience}</p>
        <div className="container bg-error vh-40">halo</div>
      </div>
    </>
  );
}

// export default function ProjectDetail() {
//   const params = useParams();
//   const data = projectData.filter((item) => item.id === params.id)[0];
//   const [Icon, setIcon] = useState([]);

//   useEffect(() => {
//     const loadIcons = async () => {
//       const iconElements = [];
//       for (let i = 0; i < data.logos.length; i++) {
//         const iconSetName = data.logos[i].slice(0, 2).toLocaleLowerCase();

//         let module;
//         try {
//           //  conditional import based on the icon set name
//           //vite doesn't allow modified dynamic import names
//           switch (iconSetName) {
//             case "si":
//               module = await import("react-icons/si");
//               break;
//             case "fa":
//               module = await import("react-icons/fa");
//               break;
//             case "tb":
//               module = await import("react-icons/tb");
//               break;
//             default:
//               console.error(`Unsupported icon set: ${iconSetName}`);
//               continue;
//           }

//           const IconComponent = module[data.logos[i]];
//           iconElements.push(<IconComponent key={i} size={50} />);
//         } catch (error) {
//           console.error(`Error loading icon set '${iconSetName}': ${error}`);
//         }
//       }

//       setIcon(iconElements);
//     };

//     loadIcons();
//   }, []);

//   return (
//     <motion.div
//       className="container project-detail mt-3 bg-secondary vh-80 br-lg p-3"
//       variants={variantCon}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//     >
//       <Link to="/projects">Back to Projects</Link>
//       <h1>{data.title}</h1>
//       <div>{data.summary}</div>
//       <div className="bg-backColor p-2 br-lg display-f gp-1 mt-2 row justify-center">
//         {Icon.map((item) => item)}
//       </div>
//     </motion.div>
//   );
// }
