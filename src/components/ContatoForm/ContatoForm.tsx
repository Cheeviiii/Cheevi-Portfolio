"use client";

import { ToastContainer } from "react-toastify";
import sendEmail from "./function/sendEmail";

export function ContatoForm() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10">
      <ToastContainer />
      <h1 className="text-5xl font-bold mb-10">CONTATO</h1>
      <form className="flex flex-col items-center justify-center gap-2" onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <label className="flex flex-col">
            Nome
            <input
              className="w-[300px] h-[40px] rounded px-1 text-black focus:border-2 focus:border-blue-500 outline-none transition-colors"
              type="text"
              name="user_name"
              required
            />
          </label>

          <label className="flex flex-col">
            Email
            <input
              className="w-[300px] h-[40px] rounded px-1 text-black focus:border-2 focus:border-blue-500 outline-none transition-colors"
              type="email"
              name="user_email"
              required
            />
          </label>
        </div>

        <div className="w-full mt-2">
          <label className="flex flex-col">
            Sobre
            <input
              className="w-full h-[40px] rounded px-1 text-black focus:border-2 focus:border-blue-500 outline-none transition-colors"
              type="text"
              name="user_sobre"
              required
            />
          </label>
        </div>

        <div className="w-full mt-2">
          <label className="flex flex-col">
            Assunto
            <textarea
              className="resize-none px-1 h-48 rounded text-black focus:border-2 focus:border-blue-500 focus:outline-none"
              name="message"
              required
            />
          </label>
        </div>

        <button className="bg-blue-500 px-5 h-10 rounded-3xl font-bold uppercase mt-2 hover:bg-blue-800 transition-colors">
          Enviar
        </button>
      </form>
    </section>
  );
}
