import React from "react";
import WorkProcessElements from "./WorkProcessElements";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";

const WorkProcess = () => {
  const data0 = [
    {
      header: "Reasearch & Analysis",
      body: "We running events with professionalism and expertise, and in identifying strongly with their outcome. This sense of responsibility means we always strive to add value.",
      icon: (
        <GiArchiveResearch className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "Creative Solutions",
      body: "Our approach is distinctly innovative. We constantly seek new ways to increase client visibility and brand value. We also look to get the most out of advances in digitalisation.",
      icon: (
        <AiOutlineSolution className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "Building",
      body: "We specially select teams for every project, to ensure each event gets the attention of the people who have the most relevant technical skills, languages and knowledge.",
      icon: (
        <FaGears className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "Project Launch",
      body: "We accurately analyze every parameters that affect intending project directly or indirectly using industry recognize tools that guarantees precise result for business and investment decision making.",
      icon: (
        <MdOutlineRocketLaunch className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <p className="font-black text-[30px] md:text-[45px] py-16">
        Our Work Process
      </p>
      <div className="mb-16">
        <WorkProcessElements data0={data0} />
      </div>
    </div>
  );
};

export default WorkProcess;
