import Elements from "@/components/Elements";
import React from "react";
import { HiOutlineUserGroup, HiOutlineLibrary } from "react-icons/hi";
import { GiNigeria } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa6";

const OurCompany = () => {
  const data0 = [
    {
      header: "Shareholders",
      list: ["Capital growth", "Dividends"],
      icon: <HiOutlineUserGroup className="text-[70px] text-red-600" />,
    },
  ];

  const data = [
    {
      header: "Government",
      list: [
        "Royalty and tax revenue.",
        "Foreign and local capital investment.",
      ],
      icon: <HiOutlineLibrary className="text-[70px] text-red-600" />,
    },
  ];

  const data1 = [
    {
      header: "Nigeria",
      list: [
        "Infrastructure development.",
        "Gas supply to domestic market",
        "Social and economic empowerment.",
      ],
      icon: <GiNigeria className="text-[70px] text-red-600" />,
    },
  ];

  const data2 = [
    {
      header: "Our Host Communities",
      list: [
        "Healthcare and aids",
        "Education",
        "Economic empowerment",
        "Infrastructure",
      ],
      icon: <FaPeopleRoof className="text-[70px] text-red-600" />,
    },
  ];
  const data3 = [
    {
      header: "Our Employees",
      list: ["Human capacity development", "Awards"],
      icon: <FaNetworkWired className="text-[70px] text-red-600" />,
    },
  ];

  return (
    <div className="px-3 md:px-16 flex flex-col">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 ">
          <h1 className="text-[35px] md:text-[45px] py-5">
            Over 30 years of Field Experience.
          </h1>
          <div className="flex flex-col gap-2 leading-7 text-gray-600">
            <p>
              Hilltop Global Oil and Gas Solutions Ltd is a wholly indigenous
              Exploration and Production Company.
            </p>
            <p>
              With reference to our track record of reliable and environmentally
              sustainable engineering, procurement and construction (EPC)
              service delivery for onshore and offshore oil and gas project,
              Hilltop was awarded 100 percent interest in the Alaoma Marginal
              Field by the Nigerian Upstream Petroleum Regulatory Commission
              (NUPRC). The Petroleum Prospecting License (PPL 224) of Alaoma
              Field was issued by NUPRC to Hilltop on 28th June 2022.
            </p>
            <p>
              The Alaoma Marginal Field is located in Umuneke Ngo Community in
              Ngor Okpala LGA, Imo State. Alaoma field is in OML 53 South which
              was discovered by Chevron in 1996. OML 53 play host to other oil
              and gas fields such as Jisike oil field, located in the
              North-Western area of the Block, Ohaji South Gas and Condensate
              Field, Izombe field.
            </p>
            <p>
              Our projects are executed through an integrated team structure
              working seamlessly across disciplines, borders and cultures to
              deliver high quality, innovative expertise across all aspects of
              our clients’ projects. We provide a professional safety management
              system that focuses on promoting and maintaining health and safety
              of personnel while executing a project.
            </p>
          </div>
        </div>
        <div className="flex-1 text-gray-600 leading-7">
          <div>
            <p>
              Strategically, we leverage on our strength and experience to
              create sustainable value and shared prosperity for all our
              stakeholders under the following categories:
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-4 elements">
              <Elements data0={data0} />
              <Elements data={data} />
            </div>

            <div className="flex gap-4 elements">
              <Elements data1={data1} />
              <Elements data2={data2} />
            </div>

            <div className="flex gap-4">
              <Elements data3={data3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
