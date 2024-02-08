import React from "react";
import WorkProcessElements from "./WorkProcessElements";
import { MdDiversity3, MdOutlineBuild } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const ChoiceDifference = () => {
  const data0 = [
    {
      header: "Dedicated Teams",
      body: "Committed to helping our partners and clients reach their goals by getting projects done within time and budget.",
      icon: (
        <MdDiversity3 className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "True Partners",
      body: "Our strong sense of identification with projects connecting our partners and clients fuels our constant effort to build trust and reliability for present and future engagements.",
      icon: (
        <FaHandshake className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "Global Know-how",
      body: "In a technological progressive world, we adopt methodologies that are global accepted with reliable ROI in executing projects and creating partnerships.",
      icon: (
        <GrTechnology className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
    {
      header: "Focus On Innovation",
      body: "Focus on increasing productivity, finding a new market and getting ahead of competitors, we constantly strive for new efficient solution to problems in the energy industry.",
      icon: (
        <MdOutlineBuild className="text-[130px] text-red-600 rounded-[80px] border-2 p-3 bg-white hover:bg-red-600 hover:text-white cursor-pointer ease-in duration-500" />
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <p className="font-black text-[30px] md:text-[45px] py-16">
        A Choice That Makes The Difference
      </p>
      <div className="mb-16">
        <WorkProcessElements data0={data0} />
      </div>
    </div>
  );
};

export default ChoiceDifference;
