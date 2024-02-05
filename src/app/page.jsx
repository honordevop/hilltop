import Business from "@/components/Business";
import CeoQuote from "@/components/CeoQuote";
import Driven from "@/components/Driven";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Operations from "@/components/Operations";
import Purpose from "@/components/Purpose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Mission />
      <Governance />
      <Business />
      <Operations />
      <CeoQuote />
      <div className="w-full h-[10rem] bg-[#f7f7f7]"></div>
      <Purpose />
      <div className="w-full h-[10rem] bg-[#f7f7f7]"></div>

      <Driven />
      <Footer />
    </div>
  );
}
