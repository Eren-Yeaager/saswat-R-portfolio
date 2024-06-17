import React from "react";
import {
  SiNextdotjs,
  SiShadcnui,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiRedux,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { Icon } from "lucide-react";
export default function Projects() {
  const projects = [
    {
      title: "Task M",
      tech: [SiNextdotjs, SiMongodb, SiShadcnui, SiTailwindcss],
      link: "https://task-m-r.vercel.app/",
      cover: "/p2.png",
      background: "bg-indigo-500",
    },
    {
      title: "Precis",
      tech: [SiReact, SiRedux, SiTailwindcss],
      link: "https://precis-jet.vercel.app/",
      cover: "/p1.png",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🛠️"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
