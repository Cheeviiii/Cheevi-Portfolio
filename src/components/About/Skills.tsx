/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { SkillsData, skills } from ".";

export function Skills() {
  const [selected, setSelected] = useState<string | null>("Web");

  const handleCategoryChange = (category: string) => {
    setSelected(category);
  };

  const skillSelected = (name: string) => {
    return `${selected === name ? "bg-blue-200 text-white" : "bg-[#e9e9e9] dark:bg-[#252729]"}`;
  };

  return (
    <div className="md:w-[50%]">
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2">
        {skills.map((item: any, index: number) => (
          <>
            <button key={index} className={`px-5 py-1 dark:text-white rounded font-bold ${skillSelected(item.value)}`} onClick={() => handleCategoryChange(item.value)}>
              {item.title}
            </button>
          </>
        ))}
      </div>

      {selected && (
        <div className="mt-5">
          <div className="flex items-center justify-center gap-10 dark:bg-[#141414] border border-[#cecece] dark:border-gray-300 p-2">
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
