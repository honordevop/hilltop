import React from "react";
import { HiOutlineUserGroup, HiOutlineCheckCircle } from "react-icons/hi";

const Elements = (props) => {
  //   console.log(props.data[0].icon);
  if (props.data0) {
    return (
      <div className="flex flex-1 gap-3">
        <div>
          {/* <HiOutlineUserGroup className="text-[80px] text-red-600" /> */}
          {props.data0[0].icon}
        </div>
        <div>
          <p className="font-black text-[25px] py-3">{props.data0[0].header}</p>
          <ul>
            {props.data0[0]?.list.map((l, i) => (
              <li className="flex items-center gap-1" key={i}>
                <HiOutlineCheckCircle />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (props.data) {
    return (
      <div className="flex flex-1 gap-3">
        <div>
          {/* <HiOutlineUserGroup className="text-[80px] text-red-600" /> */}
          {props.data[0].icon}
        </div>
        <div>
          <p className="font-black text-[25px] py-3">{props.data[0].header}</p>
          <ul>
            {props.data[0]?.list.map((l, i) => (
              <li className="flex items-center gap-1" key={i}>
                <HiOutlineCheckCircle />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (props.data1) {
    return (
      <div className="flex flex-1 gap-3">
        <div>
          {/* <HiOutlineUserGroup className="text-[80px] text-red-600" /> */}
          {props.data1[0].icon}
        </div>
        <div>
          <p className="font-black text-[25px] py-3">{props.data1[0].header}</p>
          <ul>
            {props.data1[0]?.list.map((l, i) => (
              <li className="flex items-center gap-1" key={i}>
                <HiOutlineCheckCircle />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (props.data2) {
    return (
      <div className="flex flex-1 gap-3">
        <div>
          {/* <HiOutlineUserGroup className="text-[80px] text-red-600" /> */}
          {props.data2[0].icon}
        </div>
        <div>
          <p className="font-black text-[25px] py-3">{props.data2[0].header}</p>
          <ul>
            {props.data2[0]?.list.map((l, i) => (
              <li className="flex items-center gap-1" key={i}>
                <HiOutlineCheckCircle />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (props.data3) {
    return (
      <div className="flex flex-1 gap-3">
        <div>
          {/* <HiOutlineUserGroup className="text-[80px] text-red-600" /> */}
          {props.data3[0].icon}
        </div>
        <div>
          <p className="font-black text-[25px] py-3">{props.data3[0].header}</p>
          <ul>
            {props.data3[0]?.list.map((l, i) => (
              <li className="flex items-center gap-1" key={i}>
                <HiOutlineCheckCircle />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Elements;
