import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { enqueueSnackbar } from "notistack";

import { motion } from "framer-motion";

// const variantCon = {
//   // hidden: {
//   //   opacity: 0,
//   // },
//   visible: {
//     // opacity: 1,
//     // transition: {
//     //   ease: "easeIn",
//     //   delay: 0.3,
//     // },
//     staggerChildren
//   },
//   // exit: {
//   //   opacity: 0,
//   //   transition: { ease: "easeInOut" },
//   // },
// };

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
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

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setError("");
    setStatus("submitting");

    emailjs
      .sendForm(
        "service_i9h67mw",
        "template_fga3nbf",
        form.current,
        "kEsdsB_ty7XQ4hxXK"
      )
      .then(
        (result) => {
          console.log(result.text);
          enqueueSnackbar("Message sent successfully", {
            anchorOrigin: { vertical: "top", horizontal: "right" },
            variant: "success",
          });
        },
        (error) => {
          console.log(error.text);
          enqueueSnackbar("Failed to send", {
            anchorOrigin: { vertical: "top", horizontal: "right" },
            variant: "error",
          });
          setError(`Failed to send : ${error.text} `);
        }
      )
      .finally(() => {
        setStatus("idle");
      });
    e.target.reset();
  };

  return (
    <motion.div
      className="contact container  mt-5 pt-1 pb-1 "
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row  fd-c align-center">
        <h1>
          {" "}
          <strong className="cl">Let's</strong> Talk!
        </h1>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="form display-f fd-c justify-center align-center mt-3 gp-1 "
        >
          <div className="name display-f gp-1 col-12-xs col-12-xl col-12-md">
            <motion.input
              className="col-12-xs col-4-lg col-5-xl "
              name="name"
              type="text"
              placeholder="Name"
              required
              variants={item}
            />

            <motion.input
              className="col-12-xs col-4-lg col-5-xl"
              name="email"
              type="email"
              placeholder="Email"
              minLength={6}
              maxLength={63}
              required
              variants={item}
            />
          </div>

          <motion.input
            className="col-12-xs col-12-xl col-12-md"
            name="subject"
            type="text"
            placeholder="Subject"
            minLength={6}
            variants={item}
          />
          <motion.textarea
            className="col-12-xs col-12-xl col-12-md vw-full"
            name="message"
            placeholder="Message"
            minLength={6}
            maxLength={250}
            required
            variants={item}
          />
          {error && (
            <div className="alert">
              <h3 className="login-error">{error}</h3>
            </div>
          )}

          <motion.button
            disabled={status === "submitting"}
            type="submit"
            variants={item}
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
