"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <div className="bg-white fixed top-0 z-[199]  w-full flex justify-center">
      <div className="w-full flex items-center justify-between py-2 px-3 md:py-2 md:px-16">
        <Link href="/">
          <div className="relative w-[100px] h-[40px] md:w-[200px] md:h-20">
            <Image src="/logo.png" alt="logo" fill={true} priority />
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <DarkModeToggle />
          <GiHamburgerMenu
            className="text-[#e03030] text-[40px] cursor-pointer"
            onClick={() => setToggle(true)}
          />
        </div>
        {toggle && <NavMenu toggleMenu={closeMenu} />}
      </div>
    </div>
  );
};

export default Navbar;
