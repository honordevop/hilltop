import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { links } from "@/utils/db";
import Socials from "./Socials";

const NavMenu = ({ toggleMenu }) => {
  return (
    <div className="absolute bg-[#e03030] top-0 right-0 w-full md:w-9/12 h-screen flex flex-col justify-between p-5 font-space_grotesk">
      <div
        className="flex md:text-[25px] gap-2 items-center justify-end cursor-pointer md:p-10"
        onClick={toggleMenu}
      >
        <p>Close Menu </p> <AiOutlineClose className="md:text-[30px]" />
      </div>
      <div className={`h-4/5 overflow-auto  scrollbar-w-2`}>
        <div
          className="flex flex-col items-center gap-4 md:gap-5 px-5
        md:py-6"
        >
          {links.map((link) => (
            <div
              key={link.id}
              className="border-b-[0.5px] border-gray-200 w-4/5"
              onClick={toggleMenu}
            >
              <Link href={link.url} className="text-[2rem] md:text-[4rem]">
                {link.title}
              </Link>
            </div>
          ))}
          <div className="w-4/5 py-20">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
