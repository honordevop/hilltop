import Image from "next/image";
import Link from "next/link";
import React from "react";

const AlertHome = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 md:px-20 my-5">
      <div className="hidden md:flex flex-1 rounded-br-lg border-r-2 border-b-2 border-red-600">
        <div className="h-[25rem] w-full relative rounded-bl-lg ">
          <Image
            src="/notice.png"
            fill
            priority
            className="object-scale-down rounded-bl-lg"
            alt="contact image"
          />
        </div>
      </div>

      <div className="flex-1 rounded-bl-lg border-l-2 border-b-2 border-red-600 ">
        <p className="font-black text-xl text-red-700 underline underline-offset-4">
          Disclaimer Notice
        </p>

        <div className="my-5 px-2">
          <p className="my-4 md:leading-8 text-justify">
            It has come to our attention that a certain entity is falsely
            claiming an equity stake in our Alaoma Field oil asset (PPL 224). We
            do not recognize any external claims of ownership or equity in our
            asset that are not authorized or disclosed by us. Hilltop Global Oil
            and Gas Solutions Intl Limited was awarded and owned 100% of Alaoma
            Field by the Nigerian Upstream Petroleum Regulatory Commission
            (NUPRC). We caution our clients, and partners to disregard any such
            statements from unauthorized sources.
          </p>
          <p className="mb-5 md:leading-8">
            For verified information regarding our assets, and equity structure,
            please refer exclusively to NUPRC official communications on: <br />
          </p>
          <Link
            href="https://www.nuprc.gov.ng/wp-content/uploads/2023/12/Concession-Situation-December-2023.pdf"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold p-1 rounded-md "
          >
            Status Of Oil Prospecting Licences (OPLs)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlertHome;
