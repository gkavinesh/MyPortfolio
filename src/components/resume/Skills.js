import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        {/* web Design */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Web Development</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* web Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">UI Design</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              IOS Development
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Design */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Wordpress Development</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Certificates" icon={<FaFlag />} />
        {/* English */}
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
          -Swift IOS Development by LearnQuest
          </li>
          <li className="flex items-center gap-4 text-textColor">
          -Devops on AWS by Amazon Web Services
          </li>
          <li className="flex items-center gap-4 text-textColor">
          -Microsoft Azure Cloud Services by Microsoft
          </li>
          <li className="flex items-center gap-4 text-textColor">
          -Version Control by Meta
          </li>
          <li className="flex items-center gap-4 text-textColor">
          -AI in Data Centres by Nvidia
          </li>
          

        </ul>
      </div>
      {/* =============== Design and Languages End here ===================== */}
      {/* =============== Coading and Knowledge Start here ==================== */}
      {/* =============== Coading and Knowledge End here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        {/* web Design */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JavaScript</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* web Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Java</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Mobile Application */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">C#</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Design */}
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Technical Proficiency" icon={<IoIosPaper />} />
        {/* English */}
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            JavaScript | Java | Python | C# | .NET | C++ | PHP | SQL | PostgreSQL | Firebase | Node | React | Tailwind CSS | SpringBoot | Swift | AWS Cloud | CI/CD | Microsoft Azure | Figma | Wordpress | SEO Optimization | Waterfall | Agile | Scrum | Asana | Git | Git Labs | JIRA | BitBucket
          </li>
        </ul>
      </div>
      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
