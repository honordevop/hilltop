import Elements from "@/components/Elements";
import React from "react";
import { HiOutlineUserGroup, HiOutlineLibrary } from "react-icons/hi";
import { GiNigeria } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa6";
import Image from "next/image";
import Driven from "@/components/Driven";
import WorkProcess from "@/components/WorkProcess";

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
    <div>
      <div className="message">
        <p className="px-3 md:px-16  py-20 font-black text-[35px]  md:text-[60px] message">
          Who we are
        </p>
      </div>
      <div className="px-3 md:px-16 flex flex-col bg-[#0000000d]">
        <div className="flex flex-col md:flex-row gap-2 py-16">
          <div className="flex-1 ">
            <h1 className="text-[35px] md:text-[45px] py-5">
              Over 15 years of Field Experience.
            </h1>
            <div className="flex flex-col gap-2 leading-7 ">
              <p>
                Hilltop Global Oil and Gas Solutions Ltd is a wholly indigenous
                Exploration and Production Company.
              </p>
              <p>
                With reference to our track record of reliable and
                environmentally sustainable engineering, procurement and
                construction (EPC) service delivery for onshore and offshore oil
                and gas project, Hilltop was awarded 100 percent interest in the
                Alaoma Marginal Field by the Nigerian Upstream Petroleum
                Regulatory Commission (NUPRC). The Petroleum Prospecting License
                (PPL 224) of Alaoma Field was issued by NUPRC to Hilltop on 28th
                June 2022.
              </p>
              <p>
                The Alaoma Marginal Field is located in Umuneke Ngo Community in
                Ngor Okpala LGA, Imo State. Alaoma field is in OML 53 South
                which was discovered by Chevron in 1996. OML 53 play host to
                other oil and gas fields such as Jisike oil field, located in
                the North-Western area of the Block, Ohaji South Gas and
                Condensate Field, Izombe field.
              </p>
              <p>
                Our projects are executed through an integrated team structure
                working seamlessly across disciplines, borders and cultures to
                deliver high quality, innovative expertise across all aspects of
                our clients’ projects. We provide a professional safety
                management system that focuses on promoting and maintaining
                health and safety of personnel while executing a project.
              </p>
            </div>
          </div>
          <div className="flex-1 leading-7">
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
      <div className="px-3 md:px-16 flex flex-col bg-[#f7f7f7]">
        <div className="flex flex-col md:flex-row gap-5  py-16">
          <div className="flex-1">
            <div className="h-40 w-full md:h-full md:w-full  relative ">
              <Image
                src="/lact-Unit.jpg"
                alt="lact unit"
                fill={true}
                priority
                className="object-cover "
              />
            </div>
          </div>

          <div className="flex-1 text-">
            <h3 className="font-black text-[25px] md:text-[35px] py-3">
              Our Strategy
            </h3>

            <p className="text-gray-600 leading-7">
              We seamlessly deploy state-of-the-art technology and global best
              practices and leverage on our varied expertise in providing energy
              solutions to improve oil and gas production/recovery, develop
              products and services for the energy industry
            </p>

            <h3 className="font-black text-[25px] md:text-[35px] py-3">
              What makes the Difference
            </h3>
            <p className="text-gray-600 leading-7">
              We explore and produce oil and gas in a safe, efficient, low cost
              and environmentally sustainable manner through our competent and
              committed workforce and stakeholders.
            </p>
            <div className="w-full h-36 relative mt-3">
              <Image
                src="/Oil-storage.jpg"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Driven />
      </div>

      <div className="px-3 md:px-16 flex flex-col">
        <WorkProcess />
      </div>
    </div>
  );
};

export default OurCompany;
