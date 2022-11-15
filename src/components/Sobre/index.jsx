import React from "react";

import sobreImg from "../../assets/sobre.png";

export const Sobre = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center gap-10 lg:gap-0 justify-center"
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
      <div className="flex items-center gap-32 justify-center">
        <div className="w-[300px] md:w-[480px] flex flex-col gap-10 ">
          <p className="text-lg md:text-2xl font-bold text-gray-500">
            Olá me chamo Diogo tenho 20 anos e desde de criança sou apaixonado
            por tecnología. Primeiro contato que tive com programação foi em
            2016 com Java onde eu fazia alguns plugins para servidor de
            Minecraft, apesar que comecei a focar em 2020, eu já sabia o básico
            de html e css
          </p>
          <p className="text-lg md:text-2xl font-bold text-gray-500">
            Hoje já entendo bem de front-end usando react, as vezes brinco um
            pouco com back-end fazendo algumas api rest.
          </p>
        </div>


        {/* Imagem */}
        <div className="hidden lg:block">
          <img src={sobreImg} alt="Sobre Img" />
        </div>
      </div>
    </div>
  );
};
