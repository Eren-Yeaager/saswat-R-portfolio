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
  SiGo,
  SiDocker,
  SiPlaywright,
  SiPython,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiAngular,
  SiVuedotjs,
  SiDjango,
  SiSpring,
  SiLaravel,
  SiFlutter,
  SiSelenium,
  SiJunit5,
  SiMocha,
  SiVitest,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGithubactions,
  SiLinear,
  SiJira,
  SiNear,
  SiWeb3Dotjs,
  SiRedux,
  SiEthereum,
  SiChainlink,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = {
    "Frontend Development": [
      {
        text: "React",
        Icon: SiReact,
      },
      {
        text: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        text: "Redux",
        Icon: SiRedux,
      },
      {
        text: "shadcn/ui",
        Icon: SiShadcnui,
      },
      {
        text: "Tailwind CSS",
        Icon: SiTailwindcss,
      },
    ],
    "Web3 & Blockchain": [
      {
        text: "Solidity",
        Icon: SiSolidity,
      },
      {
        text: "Ethers.js",
        Icon: SiEthereum,
      },
      {
        text: "Web3.js",
        Icon: SiWeb3Dotjs,
      },
    ],
    "Backend & Database": [
      {
        text: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        text: "PostgreSQL",
        Icon: SiPostgresql,
      },
      {
        text: "Express",
        Icon: SiExpress,
      },
      {
        text: "MongoDB",
        Icon: SiMongodb,
      },
      {
        text: "GraphQL",
        Icon: SiGraphql,
      },
    ],
    "Programming Languages": [
      {
        text: "TypeScript",
        Icon: SiTypescript,
      },
      {
        text: "Rust",
        Icon: SiRust,
      },
      {
        text: "Go",
        Icon: SiGo,
      },
    ],
    "Testing & QA": [
      {
        text: "Playwright",
        Icon: SiPlaywright,
      },
      {
        text: "Jest",
        Icon: SiJest,
      },
      {
        text: "Mocha",
        Icon: SiMocha,
      },
      {
        text: "Synpress",
        Icon: SiCypress,
      },
    ],
    "DevOps & Tools": [
      {
        text: "Docker",
        Icon: SiDocker,
      },
      {
        text: "Git",
        Icon: SiGithub,
      },
    ],
  };

  const experiences = [
    {
      title: "Software Development Engineer in Test",
      company: "Brahma.fi",
      period: "August 2024 - Present",
      location: "Remote, India",
      highlights: [
        "Developed automated testing suite using Synpress & Playwright",
        "Achieved 68% test coverage in 2 months",
        "150+ Web3 Automation scripts",
        "Performed thorough Manual testing and prepared Automation scripts for core features like Onboarding of the users through Metamask along with other features like Swap, Send and Bridge.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Nearbuilders (Build DAO)",
      period: "May 2024 - Present",
      location: "Remote",
      highlights: [
        "Built trylivepeer.near with React",
        "Developed voting system for proposals",
        "Gateway application testing with Playwright",
        "50+ issues resolved",
      ],
    },
    {
      title: "Software Development Engineer in Test",
      company: "NEAR Protocol",
      period: "January 2024 - April 2024",
      location: "Remote",
      highlights: [
        "BOS and MDAO testing",
        "Reduced bugs by 45%",
        "40+ issues resolved with Jest",
        "Led GitHub issue management",
      ],
    },
    {
      title: "Software Development Engineer in Test",
      company: "Comviva",
      period: "January 2022 - July 2024",
      location: "Bhubaneswar, India",
      highlights: [
        "95% test coverage achievement",
        "100+ UI Automation scripts with Cypress",
        "JIRA-based defect management",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 ">
      <Title
        text="Skills & Experience 🚀"
        className="flex flex-col items-center justify-center -rotate-6 mb-10"
      />

      {/* Skills Section */}
      <div className="mb-16">
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-white z-10 relative">
                {category}
              </h3>
              <HoverEffect items={skills} />
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{exp.period}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
