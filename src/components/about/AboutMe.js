import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Kavinesh Ganeshamoorthy</h2>
          <p className="text-base leading-6 ">
          Passionate individual dedicated to crafting elegant solutions through code, 
          with a keen eye for optimization and a drive for continuous learning to stay at the forefront of technology. 
          I possess a strong interest in project management to ensure efficient execution and successful delivery of software projects.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Sri Lanka
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Colombo, Sri Lanka
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
