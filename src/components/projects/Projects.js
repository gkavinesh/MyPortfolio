import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="UI Design"
            category="UserSelect & Login & SignUp"
            image={workImgThree}
          />
          <ProjectsCard
            title="Wordpress"
            category="Loading Screen & Home page"
            image={workImgOne}
          />
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Silk Harmony Full Stack"
            category="Home Page & Products Page"
            image={workImgFour}
          />
          <ProjectsCard
            title="UI Design"
            category="Dashboard & Menu"
            image={workImgSix}
          />
          <ProjectsCard
            title="Wordpress"
            category="Homepage"
            image={workImgEight}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
