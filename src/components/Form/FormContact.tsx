"use client";

import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import React from "react";
import { Button } from "../ui/button";

export function FormContact() {
  const [Loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
        )
        .then(() => {
          toast({ title: "E-mail enviado com sucesso." });
          setLoading(false);
        });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex md:w-[700px] md:h-[482px] flex-col items-center justify-center p-5 gap-[19px] bg-transparent border border-gray-300 rounded-2xl"
      onSubmit={sendEmail}
    >
      <div className="flex flex-col md:flex-row gap-[14px]">
        <input
          className="w-[298px] h-[40px] px-1 bg-transparent border-b-2 border-gray-300 font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors  placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0"
          type="text"
          name="user_name"
          placeholder="Nome"
          required
        />

        <input
          className="w-[298px] h-[40px] px-1 bg-transparent border-b-2 border-gray-300 font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors  placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
      </div>

      <div className="flex">
        <input
          className="w-[298px] md:w-[610px] h-[40px] px-1 bg-transparent border-b-2 border-gray-300 font-bold focus:outline text-lg focus:outline-blue outline-none transition-colors placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0"
          type="text"
          name="user_sobre"
          placeholder="Sobre"
          required
        />
      </div>

      <div className="flex">
        <textarea
          className="w-[298px] md:w-[610px] h-[228px] resize-none font-bold bg-transparent border-2 border-gray-300 text-lg focus:outline focus:outline-blue rounded outline-none pl-2 pt-5 placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0"
          name="message"
          placeholder="Assunto"
          required
        />
      </div>

      <Button className="bg-black text-white dark:bg-white dark:text-black text-xl transition-transform hover:scale-110">
        {Loading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}
