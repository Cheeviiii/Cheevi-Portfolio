import React from "react";
import { Contato } from "../../components/Contato";
import { Header } from "../../components/Header";
import { MainBox } from "../../components/MainBox";
import { Projects } from "../../components/Projetos";
import { Skills } from "../../components/Skills";
import { Sobre } from "../../components/Sobre";

import { SkillsData } from "../../service/data";

export function Inicio() {
  return (
    <main>
      <Header />
      <MainBox />
      <Projects />
      <Skills data={SkillsData} />
      <Sobre />
      <Contato />
    </main>
  );
}
