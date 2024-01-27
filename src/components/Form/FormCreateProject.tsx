/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import imageCompression from "browser-image-compression";
import useFetchRepos from "@/hooks/useFetchRepos";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProjetoProps } from "@/types";
import { ToastSuccess } from "@/lib/Toast";

interface FormProps {
  closeModal: () => void;
  updateProjects: () => void;
}

export function FormCreateProject({ closeModal, updateProjects }: FormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ProjetoProps>();

  const [image, setImage] = React.useState<string | null>("");
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const { Repos } = useFetchRepos();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      clearErrors("image");
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 0.01,
        });
        const reader = new FileReader();

        reader.onloadend = () => {
          let base64img = reader.result as string;

          setImage(base64img);
          setValue("image", base64img);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onSubmit: SubmitHandler<ProjetoProps> = async (data) => {
    setLoading(true);

    const dados = {
      title: data.title,
      description: data.description,
      image: data.image,
      repository: data.repository,
      types: data.types.split(",").map((type: any) => type.trim()),
      published: data.published,
    };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify(dados),
      });

      if (res.ok) {
        ToastSuccess("Projeto criado com sucesso.");
        updateProjects();
      }

      setLoading(false);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full text-black dark:text-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full grid grid-cols-2 gap-5 px-2">
        <div className="flex flex-col gap-1">
          <label className="text-base font-bold uppercase ">Nome do projeto</label>
          <input
            type="text"
            className={`w-full bg-transparent text-black dark:text-white border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none placeholder:text-gray-300 shadow-xl ${
              errors.title ? "border-red-400" : ""
            }`}
            placeholder="Portfolio Pessoal"
            {...register("title", { required: "Titulo obrigatório" })}
          />
          {errors.title && <span className="text-red-400">{errors.title.message}</span>}

          <div className="flex flex-col gap-1 mt-5">
            <label className="text-base font-bold uppercase">Descrição do projeto</label>
            <textarea
              className={`h-[230px] resize-none bg-transparent text-black dark:text-white border border-gray-300 focus:border-gray-400 font-medium rounded p-2 transition-colors focus:outline-none dark:focus:border-white placeholder:text-gray-300 shadow-xl ${
                errors.description ? "border-red-400" : ""
              }`}
              placeholder="Descrição"
              maxLength={250}
              {...register("description", { required: "Descrição obrigatória" })}
            />
            {errors.description && <span className="text-red-400">{errors.description.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-bold uppercase ">Linguagens/Frameworks </label>
          <input
            type="text"
            className={`w-full bg-transparent text-black dark:text-white border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none placeholder:text-gray-300 shadow-xl ${
              errors.title ? "border-red-400" : ""
            }`}
            placeholder="React, Typescript, Next, etc..."
            {...register("types", { required: "Linguagens/Frameworks obrigatório" })}
          />
          {errors.title && <span className="text-red-400">{errors.title.message}</span>}

          <div className="flex flex-col gap-1 mt-5">
            <label className="text-base font-bold uppercase">Imagem do projeto</label>
            <div className={`flex items-center gap-2 bg-transparent border border-gray-300 rounded p-2 ${errors.image ? "border-red-400" : ""}`}>
              <button
                type="button"
                className={`w-[150px] p-2 rounded bg-blue-300 text-white font-medium transition-colors hover:bg-blue-200 ${errors.image ? "bg-red-400 hover:bg-red-500" : ""}`}
                onClick={handleButtonClick}
              >
                Escolher Arquivo
              </button>
              {fileName ? <span className="text-lg font-medium text-white">{fileName}</span> : <span className="text-lg font-medium text-gray-300">Nenhum arquivo</span>}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              ref={(e) => {
                register("image", { required: "Imagem obrigatória" });
                fileInputRef.current = e;
              }}
            />
            <p className="mt-1 text-sm font-medium text-gray-300">SVG, PNG, JPG</p>
            {errors.image && <span className="text-red-400">{errors.image.message}</span>}

            {image && <img src={image} alt="Preview" className="w-[25%]" />}
          </div>

          <div className="flex items-center mt-5">
            <label className="text-base font-bold uppercase">Deixar publico?</label>
            <input type="checkbox" className="w-12" {...register("published")} />
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <label className="text-base font-bold uppercase">Repositório</label>
            <select {...register("repository", { value: "" })} className="bg-transparent border border-gray-300  p-2 focus:border-white">
              <option value="" className="bg-gray-400" disabled>
                Escolha um repositório
              </option>
              {Repos.map((url: string, index: number) => (
                <option key={index} value={url} className="bg-gray-400">
                  {url}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-5">
        <button type="submit" className=" w-32 bg-blue-300 p-2 text-xl font-medium text-white transition-colors rounded-lg hover:bg-blue-200 uppercase" disabled={loading}>
          {loading ? "Criando..." : "Criar"}
        </button>
      </div>
    </form>
  );
}
