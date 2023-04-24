import React from "react";
import { Contato } from "../../components/Contato";
import { Header } from "../../components/Header";
import { MainBox } from "../../components/MainBox";
import { Projects } from "../../components/Projetos";
import { Skills } from "../../components/Skills";
import { Sobre } from "../../components/Sobre";

import { SkillsData } from "../../service/data";
import { Footer } from "../../components/Footer";

export function Inicio() {
  return (
    <>
      <Header />
      <MainBox />
      <Projects />
      <Skills data={SkillsData} />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}
