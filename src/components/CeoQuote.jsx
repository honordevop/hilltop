import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const CeoQuote = () => {
  return (
    <div className="w-full  px-5 py-24 md:px-44 flex flex-col gap-4 text-center items-center justify-center font-space_grotesk">
      <FaQuoteLeft className="text-[45px] mb-10" />
      <p className="text-[20px] md:text-[30px] font-bold leading-normal ">
        I believe in a future where energy innovation meets sustainable growth.
        We navigate challenges with resilience, foster a culture of excellence,
        and fuel progress responsibly. Together, we illuminate pathways to a
        brighter, cleaner energy landscape for generations to come.
      </p>
      <p className="text-[20px] mt-12 leading-none">Dr. Charles Osazuwa</p>
      <p className="text-[16px] leading-none">CEO</p>
    </div>
  );
};

export default CeoQuote;
