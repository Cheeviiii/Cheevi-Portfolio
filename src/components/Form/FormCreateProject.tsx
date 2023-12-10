/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function FormCreateProject() {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState("Enviar");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [repository, setRepository] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
     

      reader.onloadend = () => {
        const base64img = reader.result as string
        setImage(reader.result as string);
        console.log(base64img.length)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onCreatePostProject = async (e: any) => {
    e.preventDefault();

    setButtonText("Enviando...");

    const dados = {
      title,
      description,
      image,
      repository,
      published,
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
        toast.success("Projeto criado com sucesso!");
        router.push("/admin/projects");
      } else {
        const errorText = await response.text();
        console.log("Erro na solicitação", response.status);
        toast.error(errorText || "Erro desconhecido");
      }

      setButtonText("Enviar");
    } catch (error) {
      console.error("Erro durante a solicitação", error);
    }
  };

  return (
    <form className="w-full h-screen overflow-y-auto py-16" onSubmit={onCreatePostProject}>
      <div className="w-[750px] m-auto p-auto p-10 py-10 bg-[#f5f5f5] shadow-2xl">
        <div className="flex flex-col gap-1">
          <label className="text-base font-bold uppercase">Nome do projeto</label>
          <input
            type="text"
            className="w-full bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
            placeholder="Portfolio Pessoal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 mt-5">
          <label className="text-base font-bold uppercase">Descrição do projeto</label>
          <textarea
            className="h-[250px] resize-none bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
            placeholder="Descrição bem legal"
            maxLength={224}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
          <p className="mt-1 text-sm font-medium text-gray">SVG, PNG, JPG</p>
        </div>

        {image && (
          <div className="mt-3">
            <img src={image} alt="Preview" className="rounded-2xl" />
          </div>
        )}

        <div className="flex mt-5">
          <label className="text-base font-bold uppercase">Deixar publico?</label>
          <input type="checkbox" className="w-12" checked={published} onChange={() => setPublished(!published)} />
        </div>

        <div className="flex flex-col gap-1 mt-5">
          <label className="text-base font-bold uppercase">Repositório</label>
          <input
            type="text"
            className="w-full bg-[#e6e6e6] font-medium rounded p-2 transition-colors focus:outline-blue placeholder:text-gray shadow-xl"
            placeholder="Link do repositório do github"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
        </div>

        <div className="w-full flex items-center justify-center mt-5">
          <button
            type="submit"
            className=" w-32 bg-blue p-2 text-xl font-medium text-white transition-colors  rounded-lg hover:bg-blue-dark uppercase"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}
