/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { SkillsData, skills } from ".";
import { Button } from "../ui/button";

export function Skills() {
  const [selected, setSelected] = useState<string | null>("Web");

  const handleCategoryChange = (category: string) => {
    setSelected(category);
  };

  const skillSelected = (name: string) => {
    return `${selected === name ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-100 dark:text-white dark:bg-black dark:border dark:border-gray-300"}`;
  };

  return (
    <div className="md:w-[50%]">
      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2">
        {skills.map((item: any, index: number) => (
          <div key={index}>
            <Button className={`w-full px-5 py-1 text-base text-black dark:text-white font-bold ${skillSelected(item.value)}`} onClick={() => handleCategoryChange(item.value)}>
              {item.title}
            </Button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-5">
          <div className="flex items-center justify-center gap-10 dark:bg-black border border-gray-200 dark:border-gray-300 p-2">
            {SkillsData[selected].map((skill: any, index: number) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2">
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
