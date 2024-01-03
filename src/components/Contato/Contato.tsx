import { BsLinkedin, BsDiscord } from "react-icons/bs";
import { FormContact } from "../Form";

export function Contato() {
  return (
    <section className="container h-[650px] m-auto p-auto flex flex-col items-center justify-center my-[156px]" id="contact">
      <div className="w-full flex items-center pl-5 gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Contato</h1>
        <div className="w-[220px] md:w-[522px] h-[2px] bg-red-100" />
      </div>
      <div className="flex items-center lg:items-start flex-col lg:flex-row gap-[51px] mt-[69px]">
        <div className="flex flex-col gap-[22px] pt-2">
          <a href="https://www.linkedin.com/in/diogo-souza-alves" target="_blank" className="flex items-center gap-2 text-2xl font-bold hover:text-red-100">
            <BsLinkedin size={32} />
            Linkedin
          </a>
          <h1 className="flex items-center gap-2 text-2xl font-bold hover:text-red-100">
            <BsDiscord size={32} />
            Cheevi
          </h1>
        </div>
        <FormContact />
      </div>
    </section>
  );
}
