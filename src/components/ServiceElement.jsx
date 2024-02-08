import Image from "next/image";
import React from "react";

const ServiceElement = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center bg-[#0000000d]">
      {data.map((d, i) => (
        <div
          key={i}
          className="md:px-24 gap-16 md:gap-20 p-5 md:p-10 text-justify "
        >
          <div className="w-[20rem]">
            <div className="h-[20rem] w-full relative ">
              <Image
                src={d.image}
                fill
                priority
                className="object-cover rounded-bl-lg"
                alt={`${d.header} Image`}
              />
            </div>

            <div className="my-0 md:my-5">
              <p className="text-[20px] md:text-[20px] font-bold text-red-600 py-5">
                {d.header}
              </p>
              <div className="flex flex-col gap-5 leading-7">
                <p>{d.body}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceElement;
