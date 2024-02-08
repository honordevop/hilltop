import Image from "next/image";
import React from "react";

const Team = ({ data }) => {
  return (
    <div className="flex gap-10 flex-wrap items-center justify-center">
      {data.map((d, i) => (
        <div key={i}>
          <div className="h-[250px] w-[200px] relative flex items-center justify-center">
            <Image
              src={d.image}
              fill
              priority
              alt="Chairman"
              className="object-fill"
            />
          </div>
          <div className="text-[15px] py-5">
            <p className="text-red-600 font-black text-[20px]">{d.name}</p>
            <p>{d.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
