import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { enqueueSnackbar } from "notistack";

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
    <div className="contact container  mt-5 pt-1 pb-1 ">
      <div className="row  fd-c align-center">
        <h1>Let's Talk.</h1>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="form display-f fd-c justify-center align-center mt-3 gp-1 "
        >
          <div className="name display-f gp-1 col-12-xs col-12-xl col-12-md">
            <input
              className="col-12-xs col-4-lg col-5-xl "
              name="name"
              type="text"
              placeholder="Name"
              required
            />

            <input
              className="col-12-xs col-4-lg col-5-xl"
              name="email"
              type="email"
              placeholder="Email"
              minLength={6}
              maxLength={63}
              required
            />
          </div>

          <input
            className="col-12-xs col-12-xl col-12-md"
            name="subject"
            type="text"
            placeholder="Subject"
            minLength={6}
            required
          />
          <textarea
            className="col-12-xs col-12-xl col-12-md vw-full"
            name="message"
            placeholder="Message"
            minLength={6}
            maxLength={250}
            required
          />
          {error && (
            <div className="alert">
              <h3 className="login-error">{error}</h3>
            </div>
          )}

          <button disabled={status === "submitting"} type="submit">
            {status === "submitting" ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
