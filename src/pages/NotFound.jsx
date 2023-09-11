import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gif404 from "../assets/404.gif";

export default function NotFound({ setIs404Page }) {
  useEffect(() => {
    setIs404Page(true);
  }, []);
  return (
    <div className="not-found display-f justify-center align-center vh-100 bg-white">
      <Link to="/">
        <div className="return">Return to Home</div>
      </Link>

      <a href="https://storyset.com/web" target="_blank">
        <img
          src={gif404}
          alt="Web illustrations by Storyset"
          title="Web illustrations by Storyset"
        />
      </a>
    </div>
  );
}
