/* eslint-disable @next/next/no-img-element */
"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { LoadingSpinner } from "../Loading";
import { useRouter } from "next/navigation";
import imageCompression from "browser-image-compression";
import { ProjetoProps } from "@/types";
import { ToastError, ToastSuccess } from "@/lib/Toast";
import { options } from ".";

interface FormProps {
  id: string;
}

export function FormEditProject({ id }: FormProps) {
  const [project, setProject] = useState<ProjetoProps | null>(null);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Editar");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  // Puxar projeto pelo ID
  const getProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProject(data);
        setSelectedOptions([...data.types]);
      } else {
        console.log(response);
      }
    } catch (error) {}
  };

  //Função para atualizar a imagem e compressando ela
  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);

      try {
        const compressedFile = await imageCompression(file, { maxSizeMB: 0.01 });
        const reader = new FileReader();

        reader.onloadend = () => {
          let base64String = reader.result as string;
          setImage(base64String);
          console.log(base64String.length);
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
  const onHandlePatch = async (e: FormEvent) => {
    e.preventDefault();

    setButtonText("Editando...");

    const dados = {
      title: project?.title,
      description: project?.description,
      image: image,
      published: isPublished,
      types: selectedOptions,
      repository: project?.repository,
    };

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "PATCH",
        body: JSON.stringify(dados),
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        ToastSuccess("Projeto editado com sucesso.");
        router.push("/admin/projects");
      } else {
        ToastError("Ocorreu um erro ao editar o projeto.");
      }

      setButtonText("Editar");
    } catch (error) {
      console.error("Erro ao enviar a solicitação:", error);
    }
  };

  useEffect(() => {
    if (project) {
      setImage(project.image || "");
      setIsPublished(project.published || false);
    }
  }, [project]);

  useEffect(() => {
    getProject(id);
  }, [id]);

  // Alterar dados
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProject((prevProject: any) => ({ ...prevProject, [name]: value }));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <>
      {project ? (
        <form className="w-full h-screen overflow-y-auto" onSubmit={onHandlePatch}>
          <div className="w-[750px] m-auto p-auto p-10 py-10 bg-gray-400 border border-gray-300 rounded-xl">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase">Nome do projeto</label>
              <input
                type="text"
                name="title"
                className="w-full bg-transparent text-white border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-blue focus:border-white placeholder:text-gray-300 shadow-xl"
                placeholder="Portfolio Pessoal"
                value={project?.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Descrição do projeto</label>
              <textarea
                name="description"
                className="h-[250px] resize-none bg-transparent text-white border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none focus:border-white placeholder:text-gray-300 shadow-xl"
                placeholder="Descrição bem legal"
                value={project?.description}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-base font-bold uppercase">Linguagens/Frameworks usados</label>
              <select className="bg-transparent border border-gray-300  p-2 focus:border-white" multiple value={selectedOptions} onChange={handleTypeChange}>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <ul className="flex gap-2">
                {selectedOptions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Imagem do projeto</label>
              <div className="flex items-center gap-2 bg-transparent border border-gray-300 rounded p-2">
                <button
                  type="button"
                  className="w-[150px] p-2 rounded bg-blue-300 text-white font-medium transition-colors hover:bg-blue-200"
                  onClick={handleButtonClick}
                >
                  Escolher Arquivo
                </button>
                {fileName ? (
                  <span className="text-lg font-medium text-white">{fileName}</span>
                ) : (
                  <span className="text-lg font-medium text-gray-300">Nenhum arquivo</span>
                )}
              </div>
              <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
              <p className="mt-1 text-sm font-medium text-gray-300">SVG, PNG, JPG</p>
            </div>

            {image && (
              <div className="mt-3">
                <img src={image} alt="Preview" className="w-[25%] rounded" />
              </div>
            )}

            <div className="flex mt-5">
              <label className="text-base font-bold uppercase">Deixar publico?</label>
              <input type="checkbox" className="w-12" checked={isPublished} onChange={() => setIsPublished(!isPublished)} />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Repositório</label>
              <input
                type="text"
                name="repository"
                className="w-full bg-transparent border border-gray-300 font-medium rounded p-2 transition-colors focus:outline-none focus:border-white placeholder:text-gray shadow-xl"
                placeholder="Link do repositório do github"
                value={project?.repository}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex items-center justify-center mt-5">
              {buttonText === "Editando..." ? (
                <button
                  className="w-32 bg-blue-300 opacity-50 cursor-not-allowed p-2 text-xl font-medium text-white transition-colors rounded-lg uppercase"
                  disabled
                >
                  {buttonText}
                </button>
              ) : (
                <button type="submit" className="w-32 bg-blue-300 p-2 text-xl font-medium text-white transition-colors rounded-lg hover:bg-blue-200 uppercase">
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </form>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
