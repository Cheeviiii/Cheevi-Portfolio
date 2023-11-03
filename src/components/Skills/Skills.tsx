import { SkillCard } from "./SkillCard";

import html5 from "../../../public/images/html5.svg";
import js from "../../../public/images/js.svg";
import css3 from "../../../public/images/css-3.svg";
import nodejs from "../../../public/images/nodejs.svg";
import ts from "../../../public/images/typescript.svg";
import mongodb from "../../../public/images/mongodb.svg";

export function Skills() {
  const skills = [html5, css3, js, nodejs, ts, mongodb];

  return (
    <section className="w-full flex flex-col gap-10 items-center justify-center py-5 bg-[#222]">
      <h1 className="text-5xl font-bold mt-5">HABILIDADES</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-1">
        {skills.map((item, index) => (
          <SkillCard key={index} img={item} />
        ))}
      </div>
    </section>
  );
}
