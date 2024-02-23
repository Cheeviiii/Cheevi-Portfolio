"use client";

import { useToast } from "../ui/use-toast";
import React from "react";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactProps } from "@/types";

export function FormContact() {
  const [Loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactProps>();

  const { toast } = useToast();

  const onSubmit: SubmitHandler<ContactProps> = async (data) => {
    setLoading(true);
    const dados = {
      name: data.name,
      email: data.email,
      content: data.content,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify(dados),
      });

      setLoading(false);
      reset();
      toast({ title: "Enviado com sucesso!" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="flex md:w-[700px] md:h-[482px] flex-col items-center justify-center p-5 gap-[19px] bg-transparent border border-gray-300 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row gap-[14px]">
        <div className="flex flex-col">
          <input
            className={`w-[298px] h-[40px] px-1 bg-transparent border-b-2 border-gray-300  ${
              errors.name ? "border-red-500 placeholder:text-red-500 placeholder:dark:text-red-500" : ""
            } font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors  placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0`}
            type="text"
            placeholder="Nome"
            {...register("name", { required: "Nome obrigatório" })}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col">
          <input
            className={`w-[298px] h-[40px] px-1 bg-transparent border-b-2 border-gray-300 ${
              errors.email ? "border-red-500 placeholder:text-red-500 placeholder:dark:text-red-500" : ""
            } font-bold text-lg focus:outline focus:outline-blue outline-none transition-colors  placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0`}
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email obrigatório" })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
      </div>

      <div className="flex flex-col">
        <textarea
          className={`w-[298px] md:w-[610px] h-[228px] resize-none font-bold bg-transparent border-2 border-gray-300 ${
            errors.content ? "border-red-500 placeholder:text-red-500 placeholder:dark:text-red-500" : ""
          } text-lg focus:outline focus:outline-blue rounded outline-none pl-2 pt-5 placeholder:font-bold placeholder:text-xl placeholder:text-black dark:placeholder:text-white focus:placeholder:opacity-0`}
          placeholder="Assunto"
          {...register("content", { required: "Assunto obrigatório" })}
        />
        {errors.content && <span className="text-red-500 px-1">{errors.content.message}</span>}
      </div>

      <Button className="bg-black text-white dark:bg-white dark:text-black text-xl transition-all duration-500 hover:px-10 hover:text-2xl hover:dark:bg-gray-100">
        {Loading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}
