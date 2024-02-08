import Driven from "@/components/Driven";
import Image from "next/image";
import React from "react";

const Alaoma = () => {
  return (
    <div>
      <div className="w-full h-40 relative">
        <Image
          src="/oml-53_header-1536x518.jpg"
          fill
          priority
          className=" object-cover"
          alt="header image"
        />
      </div>

      <div className="px-3 md:px-16 flex flex-col ">
        <div className="flex flex-col md:flex-row gap-5 py-16">
          <div className="flex-1 ">
            <h1 className="text-[30px] md:text-[40px] text-red-600 py-5">
              Alaoma Field is located at OML 53 situated onshore of the
              southeastern Niger Delta and has a surface area of roughly 1,585
              km2.
            </h1>
            <div className="flex flex-col gap-3 leading-7 ">
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
              <div className="h-[280px] md:h-[380px] w-full relative">
                <Image
                  src="/oml-53_asset.jpg"
                  fill
                  priority
                  className=""
                  alt="oml 53 asset"
                />
              </div>
              <p>
                The Alaoma Marginal Field is located in Umuneke Ngo Community in
                Ngor Okpala LGA, Imo State. Alaoma field is in OML 53 South
                which was discovered by Chevron in 1996. OML 53 play host to
                other oil and gas fields such as Jisike oil field, located in
                the North-Western area of the Block, Ohaji South Gas and
                Condensate Field, Izombe field.
              </p>
              <p>
                Next to Jesike oil field being produced by Seplat Energy, the
                Alaoma oil field licensed to Hilltop (PPL 224), located in the
                southeastern area of the block, is currently the next field to
                be developed in OML 53.
              </p>
            </div>
            <div className="h-[260px] md:h-[380px] w-full relative my-6">
              <Image
                src="/alaoma_eia.jpg"
                fill
                priority
                className="object-cover"
                alt="Alaoma field EIA"
              />
            </div>
          </div>

          <div className="flex-1 flex md:flex-col flex-col-reverse">
            <div className="h-[200px] md:h-[400px] w-full relative my-5">
              <Image
                src="/alaoma_stakeholders1.jpg"
                fill
                priority
                className=""
                alt="Alaoma stakeholder engagement"
              />
            </div>

            <p>
              So far, Hilltop has performed a comprehensive environmental impact
              assessment (EIA) of all prospective drilling wand walk-over
              activities on Alaoma Field in conjustion with the federal ministry
              of enviroment (FMEnv). We have constituted the host community
              forum as enshrined in the petroleum industry act (PIA) through a
              comprehensive community and stakeholders engagement program.
              Through continuous engagment with drilling, financial and
              technical service providers we are currently at the peak of
              obtaining approval from Nigeria Upstream Petroleum Regulation
              Commission (NUPRC) for a work-over operation on the existing well
              drilled by Chevron and drilling additional new wells.
            </p>

            <div className="h-[200px] md:h-[350px] w-full relative my-5">
              <Image
                src="/alaoma_stakeholders.jpg"
                fill
                priority
                className=""
                alt="Alaoma stakeholder engagement"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Driven />
      </div>
    </div>
  );
};

export default Alaoma;
