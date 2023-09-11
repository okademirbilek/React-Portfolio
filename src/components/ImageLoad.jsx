import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ImageLoad({ src, size, alt }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 1000);
  };

  return (
    <div
      className={`${pulsing ? "pulse" : ""} loadable br-lg`}
      style={{ background: "#ccc", width: "540px" }}
    >
      <motion.img
        src={src}
        className="bg-cardColor br-lg  "
        alt={alt}
        size={540}
        initial={{ height: "0.1rem", opacity: 0 }}
        animate={{
          height: imageLoading ? "0.1rem" : "348px",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 1 } },
          { opacity: { delay: 0.5, duration: 1 } })
        }
        onLoad={imageLoaded}
      />
    </div>
  );
}
