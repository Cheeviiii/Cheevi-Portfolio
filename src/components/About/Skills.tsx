/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

interface Skill {
  title: string;
  icon: string;
}

interface SkillsData {
  [Key: string]: Skill[];
}

const SkillsData: SkillsData = {
  Web: [
    {
      title: "Html",
      icon: "/images/html5.svg",
    },
    {
      title: "Css",
      icon: "/images/css-3.svg",
    },
    {
      title: "Javascript",
      icon: "/images/js.svg",
    },
  ],
  Linguagens: [
    {
      title: "Javascript",
      icon: "/images/js.svg",
    },
    {
      title: "Typescript",
      icon: "/images/ts.svg",
    },
  ],
  Frameworks: [
    {
      title: "React",
      icon: "/images/react.svg",
    },
    {
      title: "Nextjs",
      icon: "/images/nextjs.webp",
    },
    {
      title: "Prisma",
      icon: "/images/prisma.svg",
    },
  ],
  Banco_de_dados: [
    {
      title: "MongoDB",
      icon: "/images/mongodb.svg",
    },
    {
      title: "Postgres",
      icon: "/images/Postgresql.png",
    },
  ],
};

export function Skills() {
  const [selected, setSelected] = useState<string | null>("Web");

  const handleCategoryChange = (category: string) => {
    setSelected(category);
  };

  const skillSelected = (name: string) => {
    return `${selected === name ? "bg-red-200" : "bg-[#252729]"}`;
  };

  return (
    <div className="md:w-[50%]">
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2">
        <button className={`px-5 py-1 text-white rounded  transition-colors ${skillSelected("Web")}`} onClick={() => handleCategoryChange("Web")}>
          Web
        </button>
        <button className={`px-5 py-1 text-white rounded ${skillSelected("Frameworks")}`} onClick={() => handleCategoryChange("Frameworks")}>
          Frameworks
        </button>
        <button className={`px-5 py-1 text-white rounded ${skillSelected("Linguagens")}`} onClick={() => handleCategoryChange("Linguagens")}>
          Linguagens
        </button>
        <button className={`px-5 py-1 text-white rounded ${skillSelected("Banco_de_dados")}`} onClick={() => handleCategoryChange("Banco_de_dados")}>
          Databases
        </button>
      </div>

      {selected && (
        <div className="mt-5">
          <div className="flex items-center justify-center gap-10 bg-[#252729] border border-gray-300 p-2">
            {SkillsData[selected].map((skill: any, index: any) => (
              <div className="flex flex-col items-center justify-center gap-2" key={index}>
                <img className="w-14 h-14" src={skill.icon} alt={skill.title} />
                <p className="text-base font-medium uppercase">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
