import React from "react";
// import heroImage from "public/heroImage1.png";
// import avartar from "public/avatar.png";
import Image from "next/image";

const Hero = () => {
  const imageUrl = "/public/heroImage1.png";
  return (
    <div className="h-[50vh] md:h-screen">
      <div className="relative w-full h-full overflow-hidden font-space_grotesk">
        <div className="relative h-full">
          <div className="absolute h-full md:h-screen top-0 z-20 w-full flex items-center p-2 md:py-2 md:px-16">
            <div className="text-white">
              <h1 className="text-[2rem] md:text-[6rem] font-bold leading-normal">
                Powering <br /> Indigeneous Energy <br />
                <span className="">Solutions Inovatively</span>
              </h1>
            </div>
          </div>
          {/* <svg
            id="hero_svg"
            viewBox="0 0 1440 850"
            className="absolute top-0 object-fill z-20 hidden"
          >
            <path
              d="M799.9-58.7c301.9-53.3 595.5 145 648.1 443.5 52.6 298.4-149.6 583.5-451.5 636.7-302.1 53.3-589.6-145.5-642.2-443.9L16.8 1059.7"
              fill="none"
              stroke="#e42424"
              stroke-width="360"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-miterlimit="10"
            ></path>
          </svg> */}
        </div>
        <Image
          src="/heroImage1.png"
          fill={true}
          priority
          className="object-cover absolute z-0"
          alt="hero image"
        />
      </div>
      {/* <div className="md:hidden h-[100vh] w-full flex flex-col ">
        <div className="relative w-full h-1/2">
          <Image
            src="/heroImage1.png"
            fill={true}
            priority
            className="object-cover"
            alt="hero image"
          />
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center z-10">
            <div className="w-full p-2">
              <h1 className="text-[2rem] font-bold leading-normal">
                Powering <br /> Indigeneous Energy <br />
                <span className="">Solutions Inovatively</span>
              </h1>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
