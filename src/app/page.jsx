import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Mission />
      <Governance />
    </div>
  );
}
