"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FirstImage from "@/public/images/png/mouhamed-black.png";
import SecondImage from "@/public/images/png/mouhamed.png";
import Image from "next/image";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(1500);
    setRandomString(str);
  }
  return (
    <div
      className={cn(
        "p-0.5 border border-black/[0.2] rounded-[1rem] aspect-square  flex items-center justify-center w-full h-full relative ",
        className
      )}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          isHovered={isHovered}
        />
        <div className="relative z-10 flex items-center justify-center"></div>
        <Image
          src={FirstImage}
          alt="image"
          className={`absolute inset-x-0 h-full  break-words whitespace-pre-wrap 
          transition duration-500 ${
            isHovered ? "opacity-0 grayscale" : "opacity-100"
          } `}
        />
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, isHovered }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };
  return (
    <div className="pointer-events-none">
      {" "}
      <div className="absolute inset-0 rounded-2xl \[mask-image:linear-gradient(white,transparent)\] group-hover/card:opacity-50"></div>{" "}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className={`absolute z-40 inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100
        `}
        style={style}
      >
        <Image
          src={SecondImage}
          alt="image"
          className="absolute inset-x-0 h-full break-words whitespace-pre-wrap transition duration-500"
        />
      </motion.div>
    </div>
  );
}
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
