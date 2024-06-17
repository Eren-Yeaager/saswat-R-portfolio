"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiReact,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiRust,
  SiSolidity,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiCypress,
  SiJest,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next JS",
      Icon: SiNextdotjs,
    },
    {
      text: "shadcn",
      Icon: SiShadcnui,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Rust",
      Icon: SiRust,
    },
    {
      text: "Solidity",
      Icon: SiSolidity,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "Node JS",
      Icon: SiNodedotjs,
    },
    {
      text: "Cypress",
      Icon: SiCypress,
    },
    {
      text: "Jest",
      Icon: SiJest,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
  ];
  return (
    <div className="max-w-5xl mx-aut px-8">
      <Title
        text="Skills 🔥"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
