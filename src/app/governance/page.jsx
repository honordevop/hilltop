import ChoiceDifference from "@/components/ChoiceDifference";
import Driven from "@/components/Driven";
import HeaderTape from "@/components/HeaderTape";
import Team from "@/components/Team";
import Image from "next/image";
import React from "react";

const Governance = () => {
  const data = [
    {
      name: "Dr. Charles Osazuwa",
      position: "Chairman/CEO",
      image: "/chairman.jpeg",
    },
    {
      name: "Engr. Henry Oki",
      position: "GMD",
      image: "/member-2.jpg",
    },
    {
      name: "Osarodion Unweni",
      position: "ED Operations",
      image: "/ED-Operations.jpg",
    },
    {
      name: "Jolly Enabulele",
      position: "CFO",
      image: "/CFO-Enabulele.jpg",
    },
    {
      name: "Engr. (Dr.) Okotie Sylvester",
      position: "Senior Reservoir Engineer",
      image: "/SRE-Engr_Sylvester.jpeg",
    },
    {
      name: "Engr. Abigail .E. Nwaiku",
      position: "Procurement Manager",
      image: "/procurement_manager_Engr-Abigail.jpg",
    },
    ,
    {
      name: "Ann .O. Ikechukwu",
      position: "HR Manager",
      image: "/HR-Ann-Ikechwuku.jpg",
    },
  ];
  return (
    <div>
      {/* <HeaderTape /> */}
      <div className="">
        <p className="px-3 md:px-16 py-20 font-black text-[35px]  md:text-[60px] message">
          Governance
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 text-justify bg-[#0000000d] md:px-40">
          <div className="flex">
            <Team data={data} />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-16 flex flex-col">
        <ChoiceDifference />
      </div>
      <Driven />
    </div>
  );
};

export default Governance;
