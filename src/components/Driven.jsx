import React from "react";
import Image from "next/image";
import Button from "./UI/UI/Button";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Driven = () => {
  return (
    <div className="bg-red-700 w-full h-max flex flex-col justify-center items-center text-white py-16 px-1 md:px-16 gap-5">
      <div className="w-full flex flex-col gap-5 md:flex-row items-center ">
        <div className="w-3/4 px-0 p-5 flex flex-col gap-5 ">
          <p className="text-[30px] md:text-[30px] leading-12 font-black">
            Driven By Values, Delivering On A Vision.
          </p>
        </div>

        <div className="relative h-max">
          <Link
            href="/our-company"
            className="bg-gray-200 font-black text-gray-950 px-[20px] py-5 rounded-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Driven;
