import React from "react";
import { Contato } from "../../components/Contato";
import { MainBox } from "../../components/MainBox";
import { Projetos } from "../../components/Projetos";
import { Sobre } from "../../components/Sobre";

export function Inicio() {
  return (
    <div>
      <MainBox />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}
