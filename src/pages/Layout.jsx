import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <div className="image-main size" alt="Designed by starline / Freepik">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
