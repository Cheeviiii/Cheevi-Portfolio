import React from "react";
import { Contato } from "../../components/Contato";
import { MainBox } from "../../components/MainBox";
import { Projects } from "../../components/Projetos";
import { Skills } from "../../components/Skills";
import { Sobre } from "../../components/Sobre";

export function Inicio() {
  return (
    <div className="">
      <MainBox />
      <Sobre />
      <Skills />
      <Projects />
      <Contato />
    </div>
  );
}
