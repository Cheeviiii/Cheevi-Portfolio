import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  CheckCircle,
  DiscordLogo,
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export function FormContato() {
  const form = useRef();
  const [status, setStatus] = useState("");

  /* Função para enviar o email */
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
        console.log("SUCCESS", result);
        setStatus("SUCCESS");

        const timeout = setTimeout(() => {
          setStatus("");
        }, 3000);

        return () => {
          clearTimeout(timeout);
        };
      })
      .catch((error) => {
        console.log("ERROR", error);
        setStatus("ERROR");

        const timeout = setTimeout(() => {
          setStatus("");
        }, 3000);

        return () => {
          clearTimeout(timeout);
        };
      });

    e.target.reset();
  };

  return (
    <div
      className="container mx-auto py-20 flex flex-col gap-10 items-center justify-center"
      id="contato"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-bold lowercase text-[#c1c1c1]">
          _Contato
        </h1>
        <span />
      </div>

      {/* Rede sociais para contato */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-5">
          <a
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer text-[#c1c1c1] hover:text-red-500"
            target="_blank"
            href="https://www.linkedin.com/in/diogo-souza-alves-77345b220/"
          >
            <LinkedinLogo size={42} />
            Linkedin
          </a>
          <p className="flex items-center gap-2 text-2xl text-[#c1c1c1] font-bold">
            <DiscordLogo size={42} />
            Cheevi
          </p>
        </div>
      </div>

      {/* Formulario para contato */}
      <div className="w-[350px] md:w-[700px] bg-[#131313] rounded-2xl shadow-xl flex flex-col items-center justify-center">
        {status == "SUCCESS" ? renderAlertSuccess() : ""}
        {status == "ERROR" ? renderAlertError() : ""}
        <div className="my-10">
          <form
            className="flex flex-col items-center justify-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="md:w-[300px] h-[46px] px-5 font-semibold bg-transparent border-b-2 border-b-red-500 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Nome"
                name="user_name"
                required
              />

              <input
                className="md:w-[300px] h-[46px] px-5 font-semibold  bg-transparent border-b-2 border-b-red-500 text-white outline-none placeholder:text-white"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div className="pt-5">
              <input
                className="md:w-[610px] h-[46px] px-5 font-semibold  bg-transparent border-b-2 border-b-red-500 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Titulo"
                name="user_sobre"
                required
              />
            </div>

            <div className="pt-5">
              <textarea
                className="w-[270px] md:w-[610px] h-[226px] px-5 rounded-lg font-semibold bg-transparent border-2 border-red-500 text-white outline-none placeholder:text-white"
                cols="30"
                rows="5"
                placeholder="Assunto"
                name="message"
                required
              ></textarea>
            </div>

            <div className="pt-5">
              <button
                className="bg-red-500 w-[100px] h-10 text-white font-bold uppercase text-xl rounded-xl cursor-pointer hover:bg-red-800 transition-colors"
                value="Send"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/* Alertas */
const renderAlertSuccess = () => (
  <div className="px-5 pt-5">
    <div className="w-[300px] bg-green-700 p-1 rounded-xl flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle size={32} />
        <h1 className="text-2xl font-bold uppercase">Sucesso</h1>
      </div>
      <p className="text-base lowercase">Email enviado com sucesso!</p>
    </div>
  </div>
);

const renderAlertError = () => (
  <div className="px-5 pt-5">
    <div className="w-[300px] bg-red-700 p-1 rounded-xl flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle size={32} />
        <h1 className="text-2xl font-bold uppercase">Erro!</h1>
      </div>
      <p className="text-base lowercase">Ops! Algo deu errado.</p>
    </div>
  </div>
);
