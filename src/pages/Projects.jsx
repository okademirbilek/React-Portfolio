import React from "react";
import ProjectCard from "../components/ProjectCard";
import image1 from "../assets/project.svg";

export default function Projects() {
  return (
    <div className="container display-f justify-center mt-5  card-border pb-4 br-lg ">
      <div className=" display-f justify-center align-center fd-c">
        <h1 className=" mt-4 display-f align-center project-title">Projects</h1>

        <a href="https://storyset.com/business" target="_blank">
          <img
            src={image1}
            alt="business image "
            title="Image by storyset on Freepik"
            width={400}
          />
        </a>
      </div>

      <div className=" row display-f justify-center align-center mt-4 projects ">
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/movie.JPG?raw=true"
          }
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/movie.JPG?raw=true"
          }
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/threejsimg.PNG?raw=true"
          }
        />
        <ProjectCard
          src={
            "https://github.com/okademirbilek/lostarkimages/blob/main/quizzica.JPG?raw=true"
          }
        />
      </div>
    </div>
  );
}
