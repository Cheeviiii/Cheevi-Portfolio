/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { LoadingSpinner } from "../Loading";
import imageCompression from "browser-image-compression";
import { ProjetoProps } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import useFetchRepos from "@/hooks/useFetchRepos";
import { useFetchProjectID } from "@/hooks/useFetchProjects";
import { useToast } from "../ui/use-toast";

interface FormProps {
  idProject: string;
  closeModal: () => void;
  updateProjects: () => void;
}

export function FormEditProject({ idProject, closeModal, updateProjects }: FormProps) {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ProjetoProps>();

  const [image, setImage] = React.useState("");
  const [fileName, setFileName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { Repos } = useFetchRepos();
  const { Project } = useFetchProjectID(idProject);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // Função para atualizar a imagem e compressar ela
  const handleFileChange = async (e: any) => {
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
          let base64String = reader.result as string;

          setImage(base64String);
          setValue("image", base64String);
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

  // Atualizar projeto
  const onHandlePatch: SubmitHandler<ProjetoProps> = async (data) => {
    setLoading(true);

    const dados = {
      title: data.title,
      description: data.description,
      image: data.image,
      repository: data.repository,
      types: data.types.split(",").map((type: any) => type.trim()),
      published: data.published,
    };

    setLoading(false);

    try {
      const response = await fetch(`/api/projects/${idProject}`, {
        method: "PATCH",
        body: JSON.stringify(dados),
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        toast({ title: "Projeto editado com sucesso..." });
        updateProjects();
      }

      setLoading(false);
      closeModal();
    } catch (error) {
      console.error("Erro ao enviar a solicitação:", error);
    }
  };

  React.useEffect(() => {
    if (Project) {
      setImage(Project.image || "");
    }
  }, [Project]);

  return (
    <>
      {Project ? (
        <form className="w-full text-black dark:text-white" onSubmit={handleSubmit(onHandlePatch)}>
          <div className="w-full grid grid-cols-2 gap-5 ">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase">Nome do projeto</label>
              <input
                type="text"
                className="w-full bg-transparent border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-blue focus:border-white placeholder:text-gray-300 shadow-xl"
                placeholder="Portfolio Pessoal"
                {...register("title", { required: "Titulo obrigatório", value: Project?.title })}
              />
              {errors.title && <span className="text-red-400">{errors.title.message}</span>}

              <div className="flex flex-col gap-1 mt-5">
                <label className="text-base font-bold uppercase">Descrição do projeto</label>
                <textarea
                  className="h-[250px] resize-none bg-transparent border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none focus:border-white placeholder:text-gray-300 shadow-xl"
                  placeholder="Descrição"
                  maxLength={250}
                  {...register("description", { required: true, value: Project?.description })}
                />
                {errors.description && <span className="text-red-400">{errors.description.message}</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-base font-bold uppercase">Linguagens/Frameworks usados</label>
              <input
                type="text"
                className={`w-full bg-transparent text-black dark:text-white border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none placeholder:text-gray-300 shadow-xl ${
                  errors.types ? "border-red-400" : ""
                }`}
                placeholder="React, Typescript, Next, etc..."
                {...register("types", { required: "Linguagens/Frameworks obrigatório", value: Project?.types.map((type: any) => type.trim()).join(", ") })}
              />

              <div className="flex flex-col gap-1 mt-5">
                <label className="text-base font-bold uppercase">Imagem do projeto</label>
                <div className="flex items-center gap-2 bg-transparent border border-gray-300 rounded p-2">
                  <button type="button" className="w-[150px] p-2 rounded bg-blue-300 text-white font-medium transition-colors hover:bg-blue-200" onClick={handleButtonClick}>
                    Escolher Arquivo
                  </button>
                  {fileName ? <span className="text-lg font-medium text-white">{fileName}</span> : <span className="text-lg font-medium text-gray-300">Nenhum arquivo</span>}
                </div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={(e) => {
                    register("image", { required: "Imagem obrigatória", value: Project?.image });
                    fileInputRef.current = e;
                  }}
                />
                <p className="mt-1 text-sm font-medium text-gray-300">SVG, PNG, JPG</p>

                {image && (
                  <div className="mt-3">
                    <img src={image} alt="Preview" className="w-[25%] rounded" />
                  </div>
                )}
              </div>

              <div className="flex mt-5">
                <label className="text-base font-bold uppercase">Deixar publico?</label>
                <input type="checkbox" className="w-12" {...register("published", { value: Project?.published })} />
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <label className="text-base font-bold uppercase">Repositório</label>
                <select {...register("repository", { value: Project?.repository })} className="bg-transparent border border-gray-300  p-2 focus:border-white">
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
            <button type="submit" className=" w-32 bg-blue-300 p-2 text-xl font-medium text-white transition-colors rounded-lg hover:bg-blue-200 uppercase">
              {loading ? "Editando..." : "Editar"}
            </button>
          </div>
        </form>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
