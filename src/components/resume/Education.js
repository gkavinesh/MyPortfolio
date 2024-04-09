import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="1"
          title="Full Stack Developer"
          subTitle="12BK Private Limited"
          des = "Currently leading the development of a full-stack hotel reservation website for Goldi Sands Hotel, integrating advanced frontend and backend technologies to ensure a seamless user experience and efficient management of bookings."
        />
        <ResumeCard
          badge="2"
          title="Wordpress Developer"
          subTitle="WeWebster - Ontario, Canada"
          des = "Crafted half-dozen consumer websites with meticulous attention to detail, leveraging Wordpress expertise along with a strong grasp of SEO Principles and intuitive UI/UX design to enhance user engagement and drive organic traffic."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2024-2025"
          title="University Of Bedforshire"
          subTitle="Colombo, SriLanka"
          des="BSc (Hons) in Computer Science & Software Engineering"
        />
        <ResumeCard
          badge="2022-2024"
          title="SLIIT City UNI"
          subTitle="Colombo, Sri Lanka"
          des="Higher National Diploma in Information Technology"
        />
        <ResumeCard
          badge="2018-2022"
          title="Royal Institute International"
          subTitle="Colombo, Sri Lanka"
          des="Advanced Level & Ordinary Level"
        />
        <ResumeCard
          badge="2007-2018"
          title="Sri Lankan International School Riyadh"
          subTitle="Riyadh, Saudi Arabia"
          des="Lower Secondary & Secondary School"
        />
      </div>
    </div>
  );
};

export default Education;
