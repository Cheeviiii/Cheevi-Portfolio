import React, { useState } from "react";
import { ProjetosMap } from "../../service/data";

export function Projects() {
  const [showMore, setShowMore] = useState(3);
  const [totalItem] = useState(3);

  const showMoreItems = () => {
    setShowMore((prevValue) => (prevValue = 100));
  };

  return (
    <section
      className="my-52 w-full h-screen flex items-center justify-center"
      id="projetos"
    >
      <div className="w-full">
        <div className="w-full p-5 border-4 border-[#303030] bg-[#141414]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold uppercase">Projetos</h1>

            <div className="my-10 md:grid grid-cols-3">
              {ProjetosMap.slice(0, showMore).map((item) => (
                <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#1b1b1b] p-10">
                  <img
                    className="w-[250px] h-[150px] lg:w-[250px] lg:h-[150px] lg:rounded-lg"
                    src={item.img}
                    alt={item.title}
                  />
                  <h1 className="pt-5 font-bold text-base md:text-lg text-center">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
            <div className="pt-5">
              {totalItem !== showMore ? (
                ""
              ) : (
                <button className="btn" onClick={showMoreItems}>
                  Ver Mais
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
