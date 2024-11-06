"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  const offAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="w-full h-screen bg-[#000000bd] text-black absolute top-0 z-[100] flex flex-col items-center">
          <div className="h-max w-full md:w-1/2 bg-white flex flex-col items-center p-5 mt-8 rounded-md">
            <div
              onClick={() => offAlert()}
              className="flex flex-row items-center justify-end w-full cursor-pointer gap-2"
            >
              <IoMdCloseCircleOutline className="" />
              <p>Close</p>
            </div>
            <p className="font-black text-xl text-red-700 underline underline-offset-4">
              Disclaimer Notice
            </p>
            <p className="my-4 text-center leading-8">
              It has come to our attention that a certain entity is falsely
              claiming an equity stake in our Alaoma Field oil asset (PPL 224).
              We do not recognize any external claims of ownership or equity in
              our asset that are not authorized or disclosed by us. Hilltop
              Global Oil and Gas Solutions Intl Limited was awarded and owned
              100% of Alaoma Field by the Nigerian Upstream Petroleum Regulatory
              Commision (NUPRC). We caution our clients, and partners to
              disregard any such statements from unauthorized sources.
            </p>
            <p className="text-center">
              For verified information regarding our assets, and equity
              structure, please refer exclusively to NUPRC official
              communications on: <br />
            </p>
            <Link
              href="https://www.nuprc.gov.ng/wp-content/uploads/2023/12/Concession-Situation-December-2023.pdf"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-bold p-1 rounded-md mt-2 text-center"
            >
              Status Of Oil Prospecting Licences (OPLs)
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
