import html from "../assets/html-5-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import js from "../assets/js-svgrepo-com.svg";
import typescript from "../assets/typescript-official-svgrepo-com.svg";
import mongodb from "../assets/mongodb-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import nodejs from "../assets/nodejs-svgrepo-com.svg";
import nextjs from "../assets/nextjs-fill-svgrepo-com.svg";

const habilidades = [
  {
    img: html,
  },
  {
    img: css,
  },
  {
    img: js,
  },
  {
    img: typescript,
  },
  {
    img: react,
  },
  {
    img: nextjs,
  },
  {
    img: nodejs,
  },
  {
    img: mongodb,
  },
];

export const Sobre = () => {
  return (
    <main className="container mx-auto py-32">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="w-full md:w-[768px] flex flex-col gap-5 md:gap-2 items-center p-5 md:p-0">
          <h1 className="text-2xl md:text-3xl font-semibold uppercase">Olá, me chamo Diogo</h1>
          <p className="text-lg font-normal">
            Sou um desenvolvedor apaixado pelo que faço, por isso tenho me
            dedicado a expandir meus conhecimentos e habilidades em
            desenvolvimento web. Acredito que a chave para o sucesso nessa área
            está em nunca parar de aprender, e isso tem sido um princípio
            fundamental em minha jornada profissional.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-2">
          <img
            className="w-[300px] rounded-3xl shadow-3xl"
            src="https://i.pinimg.com/564x/44/a3/ab/44a3abcb179c02433ab248e89e472662.jpg"
            alt="Cheevi"
          />
          <p className="font-extrabold">*Imagem claramente ilustrativa*</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-20 py-32 justify-center">
        <h1 className="text-5xl md:text-6xl font-bold  uppercase text-red-500">
          Habilidades
        </h1>

        <div className="grid gap-10 md:grid-cols-4">
          {habilidades.map((item, index) => (
            <div
              className="border-2 p-2 border-red-500 rounded-tl-3xl rounded-br-3xl"
              key={index}
            >
              <img className="w-[150px]" src={item.img} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
