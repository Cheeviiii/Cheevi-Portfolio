import { ProjetosProps } from "@/Utils/getProjetos";
import Image from "next/image";

type ProjetosType = {
  projetos: ProjetosProps[];
};

export function Projetos({ projetos }: ProjetosType) {
  return (
    <section
      className="container m-auto p-auto flex flex-col items-center justify-center py-[156px]"
      id="projects"
    >
      <div className="w-full flex items-center pl-5 gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Projetos</h1>
        <div className="w-[180px] md:w-[522px] h-[2px] bg-blue" />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-2 gap-5 mt-5">
        {projetos.slice(0, 4).map((item: ProjetosProps, index) => (
          <div
            key={index}
            className="bg-[#f1f1f1] rounded-xl flex flex-col items-center p-5 gap-3 shadow-xl"
          >
            <Image
              className="w-[350px] h-[200px] md:w-[658px] md:h-[340px] rounded"
              width={658}
              height={340}
              src={item.project_img}
              alt={item.name}
            />
            <h1 className="w-full text-4xl font-bold text-left">{item.name}</h1>
            <p className=" text-lg font-medium">{item.description}</p>

            <div className="flex gap-2 w-full md:left-0">
              {item.tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-blue p-2 rounded-lg text-white cursor-pointer transition-transform delay-100 hover:scale-110"
                >
                  {tag}
                </p>
              ))}
            </div>

            <div className="w-full md:left-0 mt-3">
              <a
                href={item.repository}
                target="_blank"
                className="bg-gray mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-dark shadow-lg"
              >
                Repositório
              </a>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="text-3xl font-bold text-white bg-gray p-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-blue mt-10"
      >
        Todos Projetos
      </a>
    </section>
  );
}
