import React from "react";
import Socials from "./navbar/Socials";

const Footer = () => {
  return (
    <div className="w-full pt-16 pb-10 px-2 md:px-16 flex flex-col gap-10 items-center justify-center bg-[#0a0f2b] text-white">
      <div className="px-5 w-full flex flex-col md:flex-row justify-between gap-5 ">
        <div className="w-full">
          <p className="text-[40px] font-bold w-[200px] mobile reduceText">
            Reliable energy, limitless potential
          </p>
        </div>
        <div>
          <div className="flex gap-5">
            <div>
              <p className="text-[20px] font-bold">Our Offices</p>
              <div className="flex gap-2 md:gap-3">
                <div className="w-[150px]">
                  <p className="text-[15px] font-bold py-2">Head Office</p>
                  <p>45 Etete Road, Benin City, Edo State.</p>
                </div>
                <div className="w-[150px]">
                  <p className="text-[15px] font-bold py-2">Abuja Office</p>
                  <p>
                    No 3, Udo Udoma Street, Opposite A.A Rano, Asokoro Hilltop,
                    FCT, Abuja
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[150px] disappear">
              <p className="text-[20px] font-bold pb-2">Quick Link</p>
              <ul>
                <li>Our company</li>
                <li>Sustainability</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>News & insights</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[300px] flex flex-col gap-5">
          <Socials />
          <p>
            We use social media as part of our commitment to transparency & to
            provide timely information to our customers and stakeholders.
          </p>
        </div>
      </div>

      <div className="w-full px-5 text-[12px] md:text-[15px]">
        Copyright &copy; 2024 - Hilltop Global Oil & Gas Solutions
      </div>
    </div>
  );
};

export default Footer;
