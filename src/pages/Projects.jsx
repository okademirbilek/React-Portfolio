import React from "react";
import ProjectCard from "../components/ProjectCard";
import Transition from "../components/Transition";

export default function Projects() {
  return (
    <div className="container display-f">
      <div className=" row display-f justify-space-around align-center mt-4">
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/movie.JPG?raw=true"
          }
          title="proje1"
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/movie.JPG?raw=true"
          }
          title="proje1"
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/threejsimg.PNG?raw=true"
          }
          title="proje1"
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/quizzica.JPG?raw=true"
          }
          title="proje1"
        />
      </div>
    </div>
  );
}
