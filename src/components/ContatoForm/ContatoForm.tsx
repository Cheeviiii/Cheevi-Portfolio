"use client";

import { ToastContainer } from "react-toastify";
import { BsLinkedin, BsDiscord } from "react-icons/bs";
import sendEmail from "../../lib/sendEmail";

export function ContatoForm() {
  return (
    <section
      className="container h-[650px] m-auto p-auto flex flex-col items-center justify-center my-[156px]"
      id="contact"
    >
      <ToastContainer />
      <div className="w-full flex items-center pl-5 gap-[15px] md:gap-[5px]">
        <h1 className="text-2xl uppercase font-bold ">Contato</h1>
        <div className="w-[220px] md:w-[522px] h-[2px] bg-blue" />
      </div>
      <div className="flex items-center lg:items-start flex-col lg:flex-row gap-[51px] mt-[69px]">
        <div className="flex flex-col gap-[22px] pt-2">
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold hover:text-blue"
          >
            <BsLinkedin size={32} />
            Linkedin
          </a>
          <h1 className="flex items-center gap-2 text-2xl font-bold hover:text-blue">
            <BsDiscord size={32} />
            Cheevi
          </h1>
        </div>
        <form
          className="flex md:w-[700px] md:h-[482px] flex-col items-center justify-center p-5 gap-[19px] bg-[#1B1B1B] rounded-[26px] md:rounded-[46px]"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col md:flex-row gap-[14px]">
            <input
              className="w-[298px] h-[40px] rounded px-1 text-black font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
              type="text"
              name="user_name"
              placeholder="Nome"
              required
            />

            <input
              className="w-[298px] h-[40px] rounded px-1 text-black font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex">
            <input
              className="w-[298px] md:w-[610px] h-[40px] rounded px-1 text-black font-bold focus:outline text-lg focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
              type="text"
              name="user_sobre"
              placeholder="Sobre"
              required
            />
          </div>

          <div className="flex">
            <textarea
              className="w-[298px] md:w-[610px] h-[228px] resize-none rounded font-bold text-black text-lg focus:outline focus:outline-blue outline-none pl-5 pt-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
              name="message"
              placeholder="Assunto"
              required
            />
          </div>

          <button className="w-[107px] h-[42px] bg-blue rounded-[13px] text-white font-bold uppercase mt-2  transition-colors hover:bg-blue-dark">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
