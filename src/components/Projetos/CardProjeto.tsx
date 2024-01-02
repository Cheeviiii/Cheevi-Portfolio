import { ProjetoProps } from "@/types";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

interface Projeto {
  projeto: ProjetoProps;
}

export default function CardProjeto({ projeto }: Projeto) {
  return (
    <div className="relative bg-[#17181a] rounded-xl flex flex-col items-center justify-between p-5 gap-3 shadow-xl">
      <div className="flex items-center flex-col gap-3">
        <Image
          className="w-[350px] h-[200px] md:w-[658px] md:h-[340px] rounded-xl shadow-lg border border-gray-300"
          width={658}
          height={340}
          src={projeto.image}
          alt={projeto.title}
        />
        <h1 className="w-full text-4xl font-bold text-left">{projeto.title}</h1>
        <p className=" text-lg font-medium">{projeto.description}</p>
      </div>

      <a
        href={projeto.repository}
        target="_blank"
        className="absolute flex items-center gap-2 left-5 md:left-14 bg-gray-300 mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-red-200 shadow-lg"
      >
        <BsGithub size={32} /> Repositório
      </a>
    </div>
  );
}
