import React from "react";
import { Link } from "react-router-dom";

export const AllProjects = ({ projetos }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        {/* Titulo */}
        <h1 className="text-4xl uppercase font-bold">Projetos</h1>

        {/* Mapeamento dos Projetos */}
        <div className="grid grid-rows-1 md:grid-cols-3 gap-5">
          {projetos.map((item) => (
            <Link
              className="flex flex-col items-center justify-center gap-2"
              to={`/projeto/${item.slug}`}
              key={item.id}
            >
              <img
                className="w-[250px] h-[150px] md:w-[450px] md:h-[250px] rounded-lg border-2 border-blue-500"
                src={item.img}
                alt={item.title}
              />
              <h1>{item.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
