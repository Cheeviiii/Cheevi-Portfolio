import React, { useState } from "react";
import { ProjetosMap } from "../../service/data";
import { useNavigate, Link } from "react-router-dom";

export function Projects() {
  const [showMore, setShowMore] = useState(3);
  const [totalItem] = useState(showMore);

  const navigate = useNavigate();

  const showMoreItems = () => {
    setShowMore((prevValue) => (prevValue = 9));
  };

  return (
    <section className="my-52 pt-52 md:pt-0 md:my-52 w-full md:h-screen flex items-center justify-center">
      <div
        className="w-full h-full flex items-center justify-center"
        id="projetos"
      >
        <div className="w-full p-5 border-4 border-[#303030] bg-[#141414]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold uppercase">Projetos</h1>

            <div className="my-10 grid md:grid-cols-3">
              {ProjetosMap.slice(0, showMore).map((item) => (
                <Link
                  to={`projeto/${item.slug}`}
                  className="flex flex-col items-center justify-center cursor-pointer transition-all md:hover:bg-[#1b1b1b]  md:hover:scale-110 p-10"
                  key={item.id}
                >
                  <img
                    className="w-[250px] h-[150px] lg:w-[250px] lg:h-[150px] lg:rounded-lg border-2 border-yellow-500"
                    src={item.img}
                    alt={item.title}
                  />
                  <h1 className="pt-5 font-bold text-base md:text-lg text-center">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>
            <div className="pt-5">
              {totalItem >= showMore ? (
                <button className="btn" onClick={showMoreItems}>
                  Ver Mais
                </button>
              ) : (
                <button className="btn">Ver Todos</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
