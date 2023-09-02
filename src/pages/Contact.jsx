import React, { useState } from "react";

export default function Contact() {
  const [loginFormData, setLoginFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="contact container display-f fd-c align-center vh-80 bg-error ">
      <h1 className="mt-5">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="form display-f fd-c justify-center align-center mt-3 gp-1  bg-info"
      >
        <div className="display-f ">
          <input
            className="col-12-xs col-5-xl col-3-md col-5-lg"
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            value={loginFormData.name}
            required
          />

          <input
            className="col-12-xs col-5-xl col-3-md col-5-lg col-12-sm"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            value={loginFormData.email}
            minLength={6}
            required
          />
        </div>

        <input
          className="col-12-xs col-12-xl col-12-md"
          name="subject"
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          value={loginFormData.subject}
          minLength={6}
          required
        />
        <input
          className="col-12-xs col-12-xl col-12-md"
          name="message"
          onChange={handleChange}
          type="text"
          placeholder="Message"
          value={loginFormData.message}
          minLength={6}
          required
        />

        <button>{"Log In"}</button>
      </form>
    </div>
  );
}
