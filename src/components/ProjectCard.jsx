import React from "react";

export default function ProjectCard({ src, title }) {
  return (
    <div className="card">
      <img src={src}></img>
      <p className="card-title">{title}</p>
    </div>
  );
}
