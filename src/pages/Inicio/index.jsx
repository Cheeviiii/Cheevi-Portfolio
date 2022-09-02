import React from "react";
import { Contato } from "../../components/Contato";
import { Header } from "../../components/Header";
import { MainBox } from "../../components/MainBox";
import { Projects } from "../../components/Projetos";
import { Skills } from "../../components/Skills";
import { Sobre } from "../../components/Sobre";

export function Inicio() {
  return (
    <div className="">
      <Header />
      <MainBox />
      <Sobre />
      <Skills />
      <Projects />
      <Contato />
    </div>
  );
}
