import React from "react";
import Image from "next/image";
import Button from "./UI/UI/Button";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Governance = () => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center bg-[#f9f9f9]  text-black px-2 py-16 md:px-44 gap-5">
      <div className="bg-white max-w-5xl flex flex-col gap-5 md:flex-row items-center justify-center">
        <div className="relative w-11/12 md:w-2/4 h-[20rem]">
          <Image
            src="/governance.jpg"
            fill={true}
            className="object-cover"
            priority
            alt="governance"
          />
        </div>
        <div className="w-11/12 md:w-2/4 p-5 flex flex-col gap-5 ">
          <h2 className="text-red-600 text-2xl font-black">Our Governance</h2>
          <p className="text-lg leading-8">
            Hilltop's primary goal is to sufficiently explore indegionous
            solutions to meet Nigeria's energy needs, forging international
            technical and financial patnership where required.
          </p>
          <Link
            href="/governance"
            className="flex gap-2 items-center border-b-2 border-red-600 w-max"
          >
            <Button className={`w-max text-left text-gray-400 font-bold `}>
              LEARN MORE
            </Button>
            <BsArrowRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Governance;
