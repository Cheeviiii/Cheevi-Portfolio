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
    <section className="container h-[650px] m-auto p-auto flex flex-col items-center justify-center my-[156px]">
      <div className="w-full flex items-center pl-5 md:pl-[120px] gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Habilidades</h1>
        <div className="w-[180px] md:w-[522px] h-[2px] bg-blue" />
      </div>
      {/* <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-1">
          {skills.map((item, index) => (
            <SkillCard key={index} img={item} />
          ))}
        </div>
      </div> */}
    </section>
  );
}
