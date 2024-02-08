import ChoiceDifference from "@/components/ChoiceDifference";
import ServiceElement from "@/components/ServiceElement";
import React from "react";

const OurService = () => {
  const data = [
    {
      header: "Oil and Gas E&P",
      body: "We are involve in Oil and Gas exploration and production operation coordinating activities which includes search, exploration, drilling, and extraction of Hydrocarbon.",
      image: "/land_rig2.jpeg",
    },
    {
      header: "Onshore & Offshore Service",
      body: "We provide an integrated approach to various onshore & offshore projects like onshore civil engineering, marine pipeline system, subsea and wells engineering, industrial structure facility, etc.",
      image: "/offshore_services.jpg",
    },
    {
      header: "Procurement & Cost Control",
      body: "We are a trusted source for procurement and supply chain management services; delivering integrated solutions to maximize our clients’ purchasing power. Whether you are looking for high volume or specialty products, we are partnership with various OEM for equipment sourcing and procurement.",
      image: "/procurement_cost-control.jpg",
    },
    {
      header: "Pipeline Integrity Assessment",
      body: "Pipeline must hold its integrity to continue to be a safe and effective method of transporting substances. We offer services for Pipeline integrity assessment and management (PIAM) test to verify the claim of whether a pipeline can operate safely with different industry recognized methodology.",
      image: "/pipeline_assesment.avif",
    },
  ];
  return (
    <div>
      <div className="message">
        <p className="px-3 md:px-16  py-20 font-black text-[35px]  md:text-[60px] message">
          Our Business & Services
        </p>
      </div>
      <div>
        <ServiceElement data={data} />
      </div>
      <div className="px-3 md:px-16 flex flex-col">
        <ChoiceDifference />
      </div>
    </div>
  );
};

export default OurService;
