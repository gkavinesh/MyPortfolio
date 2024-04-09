import React from "react";
import { FaApple } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Full Stack Web Development"
        subTitle="Developing both the frontend and backend of websites or applications using various technologies."
      />
      <ServicesCard
        icons={<FaFigma />}
        title="UI Design"
        subTitle="Designing digital interfaces and UI Wireframes collaboratively with Figma's cloud-based platform."
      />
      <ServicesCard
        icons={<FaApple />}
        title="Swift IOS Developer"
        subTitle="Developing iOS applications involves coding, testing, and deploying software specifically tailored for Apple's mobile operating system, iOS."
      />
      <ServicesCard
        icons={<FaWordpress />}
        title="Wordpress Developer"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  );
};

export default MyServices;
