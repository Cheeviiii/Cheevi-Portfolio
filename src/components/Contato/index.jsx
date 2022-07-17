import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqdupod",
        "template_4n7it5e",
        form.current,
        "QfrnYm8Knk3Egx6uR"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      id="contato"
    >
      <div className="bg-[#141414] border-4 border-[#303030] w-full p-5 flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl md:text-3xl uppercase">
          Quer entrar em contato?
        </h1>
        <div className="my-10">
          <form
            className="flex flex-col items-center justify-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col">
              <input
                className="md:w-[350px] h-[45px] px-2 font-semibold rounded text-black outline-none"
                type="text"
                placeholder="Nome"
                name="user_name"
                required
              />
            </div>

            <div className="pt-5">
              <input
                className="md:w-[350px] h-[45px] px-2 rounded font-semibold text-black outline-none"
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div className="pt-5">
              <input
                className="md:w-[350px] h-[45px] px-2 rounded font-semibold text-black outline-none"
                type="text"
                placeholder="Sobre"
                name="user_sobre"
                required
              />
            </div>

            <div className="pt-5">
              <textarea
                className="w-[200px] md:w-[350px] px-2 rounded font-semibold text-black outline-none"
                cols="30"
                rows="5"
                placeholder="Digite Sua Mensagem..."
                name="message"
                required
              ></textarea>
            </div>

            <div className="pt-5">
              <button
                className="bg-yellow-300 w-[200px] md:w-[350px] h-10 text-black font-bold uppercase text-xl rounded-xl cursor-pointer hover:scale-110 transition-transform"
                value="Send"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
