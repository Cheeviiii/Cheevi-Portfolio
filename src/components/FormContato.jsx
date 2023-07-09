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
      })
      .catch((error) => {
        console.log("ERROR", error);
        setStatus("ERROR");
      });

    e.target.reset();
  };

  return (
    <div
      className="w-full h-screen flex flex-col gap-10 items-center justify-center"
      id="contato"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-around">
        <h1 className="text-2xl font-bold uppercase">
          <span className="text-blue-500">/ </span>Contato
        </h1>
        <span />
      </div>

      {/* Rede sociais para contato */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-5">
          <a
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer hover:text-blue-500"
            target="_blank"
            href="https://www.linkedin.com/in/diogo-souza-alves-77345b220/"
          >
            <LinkedinLogo size={42} />
            Linkedin
          </a>
          <p className="flex items-center gap-2 text-2xl font-bold">
            <DiscordLogo size={42} />
            CheeVi.?#5064
          </p>
        </div>
      </div>

      {/* Formulario para contato */}
      <div className="w-[350px] md:w-[700px] bg-[#1b1b1b] flex flex-col rounded-[46px] items-center justify-center">
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
                className="md:w-[300px] h-[46px] px-5 font-semibold rounded-lg text-black outline-none"
                type="text"
                placeholder="Nome"
                name="user_name"
                required
              />

              <input
                className="md:w-[300px] h-[46px] px-5 font-semibold rounded-lg text-black outline-none"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div className="pt-5">
              <input
                className="md:w-[610px] h-[46px] px-5 font-semibold rounded-lg text-black outline-none"
                type="text"
                placeholder="Titulo"
                name="user_sobre"
                required
              />
            </div>

            <div className="pt-5">
              <textarea
                className="w-[230px] md:w-[610px] h-[226px] p-2 rounded-lg font-semibold text-black outline-none"
                cols="30"
                rows="5"
                placeholder="Assunto"
                name="message"
                required
              ></textarea>
            </div>

            <div className="pt-5">
              <button
                className="bg-blue-500 w-[100px] h-10 text-white font-bold uppercase text-xl rounded-xl cursor-pointer hover:scale-110 transition-transform"
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
    <div className="w-[250px] bg-green-600 p-1 rounded-xl flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle size={32} />
        <h1 className="text-2xl">Sucesso!</h1>
      </div>
      <p className="text-base font-semibold">Email enviado com sucesso!</p>
    </div>
  </div>
);

const renderAlertError = () => (
  <div className="px-5 pt-5">
    <div className="w-[250px] bg-red-700 p-1 rounded-xl flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle size={32} />
        <h1 className="text-2xl">Erro!</h1>
      </div>
      <p className="text-base font-semibold">Ops! Algo deu errado!</p>
    </div>
  </div>
);
