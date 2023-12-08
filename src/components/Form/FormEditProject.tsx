/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { LoadingSpinner } from "../Loading";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ProjectsProps {
  id: string;
  title: string;
  image: string;
  description: string;
  published: boolean;
  repository: string;
}

export function FormEditProject({ id }: any) {
  const [project, setProject] = useState<ProjectsProps | null>(null);
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Editar");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProject((prevProject: any) => ({ ...prevProject, [name]: value }));
  };

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
      } else {
        console.log(response);
      }
    } catch (error) {}
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onHandlePatch = async (e: any) => {
    e.preventDefault();

    setButtonText("Editando...");

    const dados = {
      title: project?.title,
      description: project?.description,
      image: image,
      published: isPublished,
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
        toast.success("Projeto editado com sucesso.");
        router.push("/admin/projects");
      } else {
        toast.error("Ocorreu um erro ao editar o projeto.");
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

  return (
    <>
      {project ? (
        <form className="w-full h-screen overflow-y-auto py-16" onSubmit={onHandlePatch}>
          <div className="w-[750px] m-auto p-auto p-10 py-10 bg-[#f5f5f5] shadow-2xl">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase">Nome do projeto</label>
              <input
                type="text"
                name="title"
                className="w-full bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
                placeholder="Portfolio Pessoal"
                value={project?.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Descrição do projeto</label>
              <textarea
                name="description"
                className="h-[250px] resize-none bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
                placeholder="Descrição bem legal"
                maxLength={224}
                value={project?.description}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Imagem do projeto</label>
              <div className="flex items-center gap-2 bg-[#e6e6e6] rounded p-2">
                <button
                  type="button"
                  className="w-[150px] p-2 rounded bg-blue text-white font-medium transition-colors hover:bg-blue-dark"
                  onClick={handleButtonClick}
                >
                  Escolher Arquivo
                </button>
                {fileName ? (
                  <span className="text-lg font-medium text-gray">{fileName}</span>
                ) : (
                  <span className="text-lg font-medium text-gray">Nenhum arquivo</span>
                )}
              </div>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
              <p className="mt-1 text-sm font-medium text-gray">SVG, PNG, JPG</p>
            </div>

            {image && (
              <div className="mt-3">
                <img src={image} alt="Preview" className="rounded-2xl" />
              </div>
            )}

            <div className="flex mt-5">
              <label className="text-base font-bold uppercase">Deixar publico?</label>
              <input
                type="checkbox"
                className="w-12"
                checked={isPublished}
                onChange={() => setIsPublished(!isPublished)}
              />
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <label className="text-base font-bold uppercase">Repositório</label>
              <input
                type="text"
                name="repository"
                className="w-full bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
                placeholder="Link do repositório do github"
                value={project?.repository}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex items-center justify-center mt-5">
              {buttonText === "Editando..." ? (
                <button
                  className="w-32 bg-blue opacity-50 cursor-not-allowed p-2 text-xl font-medium text-white transition-colors rounded-lg uppercase"
                  disabled
                >
                  {buttonText}
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-32 bg-blue p-2 text-xl font-medium text-white transition-colors rounded-lg hover:bg-blue-dark uppercase"
                >
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
