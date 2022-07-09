import React from "react";
import TrackVisibility from "react-on-screen";

const ProjetosMap = [
  {
    id: 1,
    title: "MangaKari - Site de Leitura de Mangas",
    img: "https://www.remansonews.com/wp-content/uploads/2017/04/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "MangaKari - Site de Leitura de Mangas",
    img: "https://www.remansonews.com/wp-content/uploads/2017/04/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "MangaKari - Site de Leitura de Mangas",
    img: "https://www.remansonews.com/wp-content/uploads/2017/04/maxresdefault.jpg",
  },
];

export function Projects() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      id="projetos"
    >
      <div className="w-full h-[500px] bg-[#141414] border-4 border-[#303030] flex items-center justify-center ">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="flex flex-col items-center">
              <h1 className={isVisible ? "text-4xl font-bold uppercase animate__animated animate__fadeInDown" : 'hidden'}>Projetos</h1>

              <div className="pt-10 grid grid-cols-3">
                {ProjetosMap.map((item) => (
                  <div className={isVisible ? "flex flex-col items-center cursor-pointer hover:bg-[#1b1b1b] p-10 animate__animated animate__flipInX" : 'hidden'}>
                    <img
                      className="w-[200px] h-[150px] rounded-3xl"
                      src={item.img}
                      alt=""
                    />
                    <h1 className="pt-5 font-bold text-lg">{item.title}</h1>
                  </div>
                ))}
              </div>

              <div className="pt-5">
                <button className={isVisible ? "btn" : 'hidden'}>Ver Mais</button>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
}
