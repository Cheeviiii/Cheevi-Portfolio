"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  username: string;
  password: string;
};

export function FormSignIn() {
  const [signInError, setSignInError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: "/admin",
    });
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <form className=" w-[25%] bg-gray-400 dark:bg-[#1b1b1b] p-10 rounded-2xl shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 items-center">
          {signInError && <p className="text-[#f00]">Credentials Invalida!</p>}
          <h1 className="text-2xl text-white font-bold uppercase">Entre com sua conta</h1>
          <input
            className="w-full p-2 text-black bg-white rounded focus:outline-none placeholder:text-gray-300"
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
          />
          <input
            className="w-full p-2 text-black bg-white rounded focus:outline-none placeholder:text-gray-300"
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />

          <button type="submit" className="bg-blue-300 p-3 px-10 text-white text-xl uppercase font-bold rounded-xl transition-colors hover:bg-blue-200">
            Entrar
          </button>
        </div>
      </form>
    </section>
  );
}
