import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import Title from "./Title";

export default function Hero() {
  return (
    <div className="min-h-[60vh]  flex flex-col-reverse gap-14 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you ! 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Saswat"}.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India , I'm a versatile Full Stack and dApp Developer experienced in developing and testing both frontend and backend applications. Skilled in creating decentralized applications, enhancing application quality, and managing issue resolution efficiently."
          }
        </p>
        <Link
          href={"mailto:saswatmarpureddy@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-[50%] -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <Button borderRadius="0.5rem" className="p-3 font-semibold">
            <p>📢 Available for Work.</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
