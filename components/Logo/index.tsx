import DockAI from "@/public/images/png/Dock AI.png";
import Image from "next/image";

export default function Logo({ className, width }: any) {
  return (
    <Image
      src={DockAI}
      alt="Logo Dock AI"
      className={`${className} `}
      width={width}
    />
  );
}
