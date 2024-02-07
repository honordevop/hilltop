import React from "react";
import { GiArchiveResearch } from "react-icons/gi";

const WorkProcessElements = ({ data0 }) => {
  //   if (props.data0) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {data0.map((data, i) => (
        <div
          className="flex flex-col gap-5 items-center justify-center text-center"
          key={i}
        >
          {data.icon}
          <h3 className="font-black text-[25px]">{data.header}</h3>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
  //   }

  //   if (props.data1) {
  //     return (
  //       <div className="flex flex-col gap-5 items-center justify-center text-center">
  //         {props.data1[0].icon}
  //         <h3 className="font-black text-[25px]">{props.data1[0].header}</h3>
  //         <p>{props.data1[0].body}</p>
  //       </div>
  //     );
  //   }

  //   if (props.data2) {
  //     return (
  //       <div className="flex flex-col gap-5 items-center justify-center text-center">
  //         {props.data2[0].icon}
  //         <h3 className="font-black text-[25px]">{props.data2[0].header}</h3>
  //         <p>{props.data2[0].body}</p>
  //       </div>
  //     );
  //   }

  //   if (props.data3) {
  //     return (
  //       <div className="flex flex-col gap-5 items-center justify-center text-center">
  //         {props.data3[0].icon}
  //         <h3 className="font-black text-[25px]">{props.data3[0].header}</h3>
  //         <p>{props.data3[0].body}</p>
  //       </div>
  //     );
  //   }
};

export default WorkProcessElements;
