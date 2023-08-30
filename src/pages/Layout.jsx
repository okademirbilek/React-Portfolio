import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ParticlesContainer from "../components/ParticlesContainer";

export default function Layout() {
  return (
    <>
      {/* <video
        id="background-video"
        autoPlay
        loop
        muted
        // poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source src="gojoo.mp4" type="video/mp4"></source>
      </video> */}
      <ParticlesContainer />
      <div className="image-main size" alt="Designed by starline / Freepik">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
