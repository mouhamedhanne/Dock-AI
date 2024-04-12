import NexusAI from "@/public/images/png/Nexus AI.png";
import Image from "next/image";

export default function Logo({ className, width }: any) {
  return (
    <Image
      src={NexusAI}
      alt="Logo Nexus AI"
      className={`${className} `}
      width={width}
    />
  );
}
