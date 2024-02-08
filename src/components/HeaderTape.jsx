"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeaderTape = () => {
  const router = useRouter();
  const currentUrl = router.asPath;

  console.log(currentUrl);
  return (
    <div className="bg-[#0a0f2b]">
      <div className="p-6">
        <p className="text-white">{currentUrl}</p>
      </div>
    </div>
  );
};

export default HeaderTape;
