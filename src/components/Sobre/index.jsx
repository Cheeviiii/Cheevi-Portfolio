import React from "react";

export const Sobre = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      id="sobre"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-around">
        <h1 className="text-2xl font-bold uppercase">
          <span className="text-blue-500">/ </span>Sobre mim
        </h1>
        <span />
      </div>

      {/* Descrição sobre mim */}
      <div className="flex items-center justify-center">
        <div className="w-[300px] md:w-[900px] flex flex-col gap-10 pt-5">
          <p className="text-lg md:text-2xl font-bold text-gray-500">
            Olá, meu nome é Diogo, sou apaixonado em tecnologias desde de
            criança, tenho algumas formações na udemy, youtube etc... Que me
            gerou um bom conhecimento em HTML, CSS, Javascript, Nodejs,
            ExpressJS e ReactJS, estou sempre procurando evoluir, buscando novas
            tecnicas de aperfeiçoamento, sempre buscando aprender coisas novas,
            tenho algumas habilidades extras, designer, edição de videos, mas
            meu foco sempre foi o T.I.
          </p>
          <p className="text-lg md:text-2xl font-bold text-gray-500">
            Hoje em dia tenho um belo conhecimento como funciona a web, estou me
            graduando em Análise e desenvolvimento de sistemas.
          </p>
        </div>
      </div>
    </div>
  );
};
