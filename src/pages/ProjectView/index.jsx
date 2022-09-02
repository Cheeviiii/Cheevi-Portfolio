import { GithubLogo, Globe } from "phosphor-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const ProjectView = ({ data }) => {
  const { slug } = useParams();

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <Link to="/" className="text-5xl uppercase m-4 text-yellow-500">
          &lsaquo;Cheevi/&rsaquo;
        </Link>
      </div>
      {data
        .filter((card) => card.slug === slug)
        .map((card, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center justify-center gap-5 h-screen"
          >
            <img
              src={card.img}
              alt={card.title}
              className="md:w-[500px] md:h-[300px] rounded-2xl border-2 border-yellow-500"
            />
            <div className="flex items-center flex-col gap-3 text-center">
              <div className="w-full">
                <h1 className="font-bold text-4xl uppercase">
                  {card.title}
                </h1>
                <p className="text-xl">{card.description}</p>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-center pt-10 gap-5">
                <a
                  href={card.link}
                  target="_blank"
                  className="flex items-center px-5 border-2 border-yellow-500 rounded-3xl text-lg uppercase font-bold py-4 hover:border-red-500 transition-colors"
                >
                  <Globe className="mx-2" size={32} /> Link Do Projeto
                </a>
                <a
                  href={card.github_link}
                  target="_blank"
                  className="flex items-center px-10 border-2 border-yellow-500 rounded-3xl text-lg uppercase font-bold py-4 hover:border-red-500 transition-colors"
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
