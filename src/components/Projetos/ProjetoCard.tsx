import Image from "next/image";
import { ProjetosProps } from "./Projetos";

interface Projeto {
  projeto: ProjetosProps;
}

export default function ProjetoCard({ projeto }: Projeto) {
  return (
    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-between p-5 gap-3 shadow-xl">
      <div className="flex items-center flex-col gap-3">
        <Image
          className="w-[350px] h-[200px] md:w-[658px] md:h-[340px] rounded-xl shadow-lg"
          width={658}
          height={340}
          src={projeto.image}
          alt={projeto.title}
        />
        <h1 className="w-full text-4xl font-bold text-left">{projeto.title}</h1>
        <p className=" text-lg font-medium">{projeto.description}</p>
      </div>

      <div className="w-full md:left-0 mt-3">
        <a
          href={projeto.repository}
          target="_blank"
          className="bg-gray-300 mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-300 shadow-lg"
        >
          Repositório
        </a>
      </div>
    </div>
  );
}
