/* eslint-disable @next/next/no-img-element */

interface CardProps {
  item: {
    id: string;
    title: string;
    image: string,
    description: string;
    publised: boolean;
    repository: string;
  };

  onDelete: (id: string) => void;
}

export function CardProject({ item, onDelete }: CardProps) {
  return (
    <div className="w-full bg-[#f1f1f1] rounded-xl flex flex-col items-center p-5 gap-3 shadow-xl">
      <img
        className="w-[350px] h-[200px] md:w-[1250px] md:h-[250px] rounded"
        src={item?.image}
        alt={item?.title}
      />
      <h1 className="w-full text-4xl font-bold text-left">{item?.title}</h1>
      <p className=" text-lg font-medium">{item?.description}</p>

      <div className="w-full text-lg font-medium text-left flex gap-2">
        Status: {item?.publised ? <p className="text-[#44ff33] font-bold">Publicado</p> : <p className="text-[#ff3333]">Não publicado</p>}
      </div>

      <div className="w-full flex gap-2 md:left-0 mt-3">
        {item?.repository === "" ? (
          <button className="bg-gray opacity-25 mt-2 rounded-xl text-xl cursor-not-allowed text-white px-3 text-center py-2 transition-colors shadow-lg">
            Sem repositório
          </button>
        ) : (
          <a
            href={item?.repository}
            target="_blank"
            className="bg-gray mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-dark shadow-lg"
          >
            Repositório
          </a>
        )}

        <button
          onClick={() => onDelete(item?.id)}
          className="bg-[#ff1818] mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-[#571919] shadow-lg"
        >
          Deletar
        </button>

        <button
          onClick={() => onDelete(item?.id)}
          className="bg-blue mt-2 rounded-xl text-xl cursor-pointer text-white px-3 text-center py-2 transition-colors hover:bg-blue-dark shadow-lg"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
