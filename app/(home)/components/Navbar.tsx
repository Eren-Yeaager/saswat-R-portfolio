import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/marpureddy-saswat-352267219/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Eren-Yeaager",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://x.com/Redwolf56224951",
      Label: "X",
      Icon: SiX,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-900 -rotate-2">
        Saswat M 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-7 h-7 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
