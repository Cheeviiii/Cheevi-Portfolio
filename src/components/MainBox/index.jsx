import { Link } from "react-scroll";
import MainImage from "../../assets/mainbox.png";

export function MainBox() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center lg:items-start justify-center">
        <div className="md:w-[575px]">
          <p className=" text-2xl md:text-5xl font-bold text-gray-200 text-center lg:text-start">
            Olá, me chamo <span className="text-blue-500">Diogo</span> sou{" "}
            <span className="text-blue-500">desenvolvedor front-end</span>
          </p>
        </div>
        <div className="w-[300px]">
          <p className="text-gray-500 font-bold text-center lg:text-start text-sm md:text-xl">
            estou sempre procurando evoluir e aprender novas tecnologias
          </p>
        </div>
        <div className="pt-10">
          <Link
            className="border-2 border-blue-500 px-8 p-2 rounded-lg cursor-pointer"
            to="contato"
            smooth={true}
            duration={500}
          >
            Entrar em contato
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <img src={MainImage} alt="" />
      </div>
    </div>
  );
}
