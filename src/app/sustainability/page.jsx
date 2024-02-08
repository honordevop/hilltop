import Image from "next/image";
import React from "react";

const Sustainability = () => {
  return (
    <div className="w-full ">
      <div className="sustainability-background-image p-5 w-full ">
        <div className="h-full w-full b flex flex-col items-center justify-center gap-">
          <p className="px-3 md:px-16 pt-20 pb-10 font-black text-[35px] text-white md:text-[60px]">
            Sustainability
          </p>
          <p className="text-[40px] md:text-[80px] text-white w-[200px] md:w-[400px]">
            A better legacy for future generations
          </p>
        </div>
      </div>
      <div className="px-3 md:px-16 flex flex-col message">
        <div className="flex flex-col py-24 items-center justify-center md:px-32">
          <p className="text-[25px] md:text-[40px] font-black text-center ">
            Where others would settle for being “responsible”, we hold ourselves
            to a higher standard, determined to leave a better legacy for future
            generations.
          </p>
        </div>
      </div>
      <hr />

      <div className="flex flex-col gap-10 py-16 md:px-24">
        <div className="bg-[#0000000d] green-module-bg2">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 p-10 text-justify bg-[#0000000d]">
            <div className="flex-1 ">
              <div className="h-[25rem] w-full relative ">
                <Image
                  src="/a-local-restaurant-in-one-of-seplat-s-communities-cooking-with-lpg-2.jpg"
                  fill
                  priority
                  className="object-cover rounded-bl-lg"
                  alt="local restaurant"
                />
              </div>
            </div>

            <div className="flex-1 ">
              <div className="my-0 md:my-5">
                <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                  Social impact
                </p>
                <div className="flex flex-col gap-5 leading-7">
                  <p>
                    As part of our Social Development plan, we fund a
                    considerable number of sustainable community development
                    activities in addition to direct company investments and
                    contributions to local and national economies through tax
                    and levies paid to various government tiers. We are
                    determined to have a positive impact on the world around us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 text-justify bg-[#0000000d] ">
            <div className="flex-1 ">
              <div className="h-[25rem] w-full relative ">
                <Image
                  src="/_mg_1418.jpg"
                  fill
                  priority
                  className="object-cover rounded-bl-lg"
                  alt="image"
                />
              </div>
            </div>

            <div className="flex-1 ">
              <div className="my-0 md:my-5">
                <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                  Creating value
                </p>
                <div className="flex flex-col gap-5 leading-7">
                  <p>
                    To improve the legacy we leave for future generations, we
                    center our energy solutions and decision-making around value
                    creation. Our commitment is in promoting favorable
                    socio-economic outcomes for both our nation and the
                    communities we serve, all the while bolstering an expanding
                    economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-20 p-10 text-justify bg-[#0000000d]">
            <div className="flex-1 ">
              <div className="h-[25rem] w-full relative ">
                <Image
                  src="/environment.jpg"
                  fill
                  priority
                  className="object-cover rounded-bl-lg"
                  alt="Environment Image"
                />
              </div>
            </div>

            <div className="flex-1 ">
              <div className="my-0 md:my-5">
                <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                  Environment
                </p>
                <div className="flex flex-col gap-5 leading-7">
                  <p>
                    We are dedicated to conducting our operations in a
                    responsible and accountable manner, with the aim of
                    safeguarding our planet for both current and future
                    generations by minimizing our environmental footprint. We
                    employ a conscientious strategy in utilizing natural
                    resources, aiming to reduce the negative effects of our
                    activities and ensuring  the quality of wastes that are
                    discharged to the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 text-justify bg-[#0000000d]">
            <div className="flex-1 ">
              <div className="h-[25rem] w-full relative ">
                <Image
                  src="/_mg_1474.jpg"
                  fill
                  priority
                  className="object-cover rounded-bl-lg"
                  alt="pupils image"
                />
              </div>
            </div>

            <div className="flex-1 ">
              <div className="my-0 md:my-5">
                <p className="text-[30px] md:text-[40px] text-red-600 py-5">
                  Local content
                </p>
                <div className="flex flex-col gap-5 leading-7">
                  <p>
                    As a wholly Indigenous energy company, Hilltop seeks to
                    ensure there is a positive multiplier effect on the local
                    economy through significant local content spend, enhancing
                    the Company’s local supply chain, and contributing to a
                    thriving and competitive local market. We continually seek
                    to use local business partners, which helps to
                    simultaneously reduce operating costs and project risks by
                    developing a mutually beneficial relationship with the
                    Company’s local partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
