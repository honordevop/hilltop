import React from "react";
import Image from "next/image";
import Button from "./UI/UI/Button";
import { BsArrowRightCircle } from "react-icons/bs";

const Purpose = () => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center bg-[#040308] text-white py-16 px-1 md:px-44 gap-5">
      <div className="bg-transparent max-w-5xl flex flex-col gap-5 md:flex-row items-center justify-center">
        <div className="relative w-11/12 md:w-2/4 h-[20rem]">
          <Image
            src="/blessing2edited.png"
            fill={true}
            className="object-cover"
            priority
            alt="business"
          />
        </div>
        <div className="w-11/12 md:w-2/4 p-5 flex flex-col gap-5 ">
          <p className="text-[30px] md:text-[40px] leading-12">
            Our purpose is to deliver sustainable energy solutions for society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
