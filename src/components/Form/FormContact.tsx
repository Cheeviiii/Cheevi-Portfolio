import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import React from "react";

export function FormContact() {
  const [Loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs
        .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string, e.target, process.env.NEXT_PUBLIC_EMAILJS_KEY as string)
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
    <form className="flex md:w-[700px] md:h-[482px] flex-col items-center justify-center p-5 gap-[19px] bg-[#e9e9e9] dark:bg-[#161616] rounded-2xl shadow-xl" onSubmit={sendEmail}>
      <div className="flex flex-col md:flex-row gap-[14px]">
        <input
          className="w-[298px] h-[40px] rounded px-1 text-black dark:bg-white font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
          type="text"
          name="user_name"
          placeholder="Nome"
          required
        />

        <input
          className="w-[298px] h-[40px] rounded px-1 text-black dark:bg-white font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
          type="email"
          name="user_email"
          placeholder="Email"
          required
        />
      </div>

      <div className="flex">
        <input
          className="w-[298px] md:w-[610px] h-[40px] rounded px-1 text-black dark:bg-white font-bold focus:outline text-lg focus:outline-blue outline-none transition-colors pl-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
          type="text"
          name="user_sobre"
          placeholder="Sobre"
          required
        />
      </div>

      <div className="flex">
        <textarea
          className="w-[298px] md:w-[610px] h-[228px] resize-none rounded font-bold text-black dark:bg-white text-lg focus:outline focus:outline-blue outline-none pl-5 pt-5 placeholder:font-bold placeholder:text-xl placeholder:text-black"
          name="message"
          placeholder="Assunto"
          required
        />
      </div>

      <button className="w-[107px] h-[42px] bg-blue-600 rounded-[13px] text-white font-bold uppercase mt-2  transition-colors hover:bg-blue-900">
        {Loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
