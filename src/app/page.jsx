import Business from "@/components/Business";
import CeoQuote from "@/components/CeoQuote";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Operations from "@/components/Operations";
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
    </div>
  );
}
