import React from "react";
import { Link } from "react-router-dom";
import { GithubLogo, Globe } from "phosphor-react";

export const ProjetoViewer = ({ data, slug }) => {
  console.log(slug);
  return (
    <div className="relative w-full h-screen">
      {/* Header do componente */}
      <div className="flex items-center justify-center">
        <Link to="/" className="text-5xl uppercase m-4 text-blue-500">
          &lsaquo;Cheevi/&rsaquo;
        </Link>
      </div>

      {/* Mapeamento da array */}
      {data
        .filter((card) => card.slug === slug)
        .map((card, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center gap-5 h-[800px]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="md:w-[500px] md:h-[300px] rounded-2xl border-2 border-blue-500"
            />
            <div className="flex items-center flex-col gap-3 text-center">
              <div className="w-full flex flex-col gap-5">
                <h1 className="font-bold text-4xl uppercase">{card.title}</h1>
                <p className="text-xl">{card.description}</p>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-center pt-10 gap-5">
                {card.link === "" ? (
                  <button
                    type="button"
                    className="flex items-center px-5 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 disabled:opacity-25"
                    disabled
                  >
                    <Globe className="mx-2" size={32} /> Link não encontrato
                  </button>
                ) : (
                  <a
                    href={card.link}
                    target="_blank"
                    className="flex items-center px-5 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 md:hover:border-red-500 transition-colors"
                  >
                    <Globe className="mx-2" size={32} /> Link Do Projeto
                  </a>
                )}
                <a
                  href={card.github_link}
                  target="_blank"
                  className="flex items-center px-10 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 md:hover:border-red-500 transition-colors"
                >
                  <GithubLogo className="mx-2" size={32} /> Github
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
