/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import imageCompression from "browser-image-compression";
import { ToastError, ToastSuccess } from "@/lib/Toast";
import axios from "axios";
import { options } from ".";

interface FormProps {
  closeModal: any;
  getProjects: () => void;
}

export function FormCreateProject({ closeModal, getProjects }: FormProps) {
  const [image, setImage] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [Repos, setRepos] = React.useState([]);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [published, setPublished] = React.useState(false);
  const [repository, setRepository] = React.useState("");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    const getRepos = async () => {
      const ReposResponse = await axios.get("https://api.github.com/users/cheeviz/repos", {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });
      const res = ReposResponse.data;
      const ReposURL = res.map((repo: any) => repo.html_url);
      setRepos(ReposURL);
    };
    getRepos();
  }, []);

  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 0.01,
        });
        const reader = new FileReader();

        reader.onloadend = () => {
          let base64img = reader.result as string;

          setImage(base64img);
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

  const handleSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    setRepository(selectedValue);
  };

  const onCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const dados = {
      title,
      description,
      image,
      repository,
      published,
      types: selectedOptions,
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        ToastSuccess("Projeto criado com sucesso!");

        setTitle("");
        setImage(null);
        setFileName(null);
        setDescription("");
        setPublished(false);
        setRepository("");
        setSelectedOptions([]);

        getProjects();
        closeModal();
      } else {
        const errorText = await response.text();
        console.log("Erro na solicitação", response.status);
        ToastError(errorText || "Erro desconhecido.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Erro durante a solicitação", error);
    }
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <form className="w-[100%] text-black dark:text-white" onSubmit={onCreateProject}>
      <div className="w-[750px] p-10">
        <div className="flex flex-col gap-1">
          <label className="text-base font-bold uppercase ">Nome do projeto</label>
          <input
            type="text"
            className="w-full bg-transparent text-black dark:text-white border border-gray-300 focus:border-gray-400 dark:focus:border-white font-medium rounded p-2 transition-colors focus:outline-none placeholder:text-gray-300 shadow-xl"
            placeholder="Portfolio Pessoal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 mt-5">
          <label className="text-base font-bold uppercase">Descrição do projeto</label>
          <textarea
            className="h-[250px] resize-none bg-transparent text-black dark:text-white border border-gray-300 focus:border-gray-400  font-medium rounded p-2 transition-colors focus:outline-none dark:focus:border-white placeholder:text-gray-300 shadow-xl"
            placeholder="Descrição bem legal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-5">
          <label className="text-base font-bold uppercase">Linguagens/Frameworks usados</label>
          <select className="bg-transparent border border-gray-300  p-2 focus:border-white" multiple value={selectedOptions} onChange={handleTypeChange}>
            {options.map((option, index) => (
              <option className="text-black dark:text-white" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <ul className="flex gap-2 mt-2">
            {selectedOptions.map((item, index) => (
              <li className="text-black dark:text-white" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1 mt-5">
          <label className="text-base font-bold uppercase">Imagem do projeto</label>
          <div className="flex items-center gap-2 bg-transparent border border-gray-300 rounded p-2">
            <button type="button" className="w-[150px] p-2 rounded bg-blue-300 text-white font-medium transition-colors hover:bg-blue-200" onClick={handleButtonClick}>
              Escolher Arquivo
            </button>
            {fileName ? <span className="text-lg font-medium text-white">{fileName}</span> : <span className="text-lg font-medium text-gray-300">Nenhum arquivo</span>}
          </div>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
          <p className="mt-1 text-sm font-medium text-gray-300">SVG, PNG, JPG</p>
        </div>

        {image && (
          <div className="mt-3">
            <img src={image} alt="Preview" className="w-[25%]" />
          </div>
        )}

        <div className="flex mt-5">
          <label className="text-base font-bold uppercase">Deixar publico?</label>
          <input type="checkbox" className="w-12" checked={published} onChange={() => setPublished(!published)} />
        </div>

        <div className="flex flex-col gap-1 mt-5">
          <label className="text-base font-bold uppercase">Repositório</label>
          <select onChange={handleSelectChange} value={repository || ""} className="bg-transparent border border-gray-300  p-2 focus:border-white">
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

        <div className="w-full flex items-center justify-center mt-5">
          <button type="submit" className=" w-32 bg-blue-300 p-2 text-xl font-medium text-white transition-colors rounded-lg hover:bg-blue-200 uppercase" disabled={loading}>
            {loading ? "Criando..." : "Criar"}
          </button>
        </div>
      </div>
    </form>
  );
}
