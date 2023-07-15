import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export const TodosProjetos = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const projetosInLocal = [
    {
      title: "LISTA DE TAREFAS",
      description:
        "Um aplicativo de lista de tarefas simples, permite que os usuários adicionem, excluam e marquem as tarefas como concluidas.",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/07/15/03fd85317b1c8a89ea5c1ce3ed84db11.png",
      github_link: "https://github.com/Cheeviiii/lista-de-tarefas",
      projeto_demo: "https://lista-de-tarefas-indol-sigma.vercel.app/",
    },

    {
      title: "PORTFOLIO",
      description:
        "Projeto web de portfolio onde compartilho minhas habilidades, experiências e projetos anteriores de forma visualmente atraente e fácil de navegar.",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/07/15/7a34a0c048c52f5acd4d5f8a5540d6ef.png",
      github_link: "https://github.com/Cheeviiii/Cheevi-Portfolio",
      projeto_demo: "https://cheevi-portfolio.vercel.app",
    },

    {
      title: "CONTROLE FINANCEIRO",
      description:
        "Projeto simples de controle financeiro que permite acompanhar e gerencias finanças pessoais de forma organizada.",
      thumbnail:
        "https://bg-so-1.zippyimage.com/2023/07/15/1998924cbb01370db96da386b87f55cb.png",
      github_link: "https://github.com/Cheeviiii/controle-financeiro",
      projeto_demo: "https://controle-financeiro-weld.vercel.app/",
    },
  ];

  useEffect(() => {
    async function fetchPosts() {
      await new Promise((resolve) => setTimeout(resolve, 500));

      await fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch(() => {
          setPosts(projetosInLocal);
          setLoading(false);
        });
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="md:py-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl font-bold text-[#c2c2c2]">_projetos</h1>

        {isLoading == false ? (
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-7 gap-x-20">
            {posts.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex gap-2 items-center">
                  <p className="text-red-500 text-bold">Project {index + 1}</p>
                  <h1 className="text-base text-[#c1c1c1] lowercase">
                    // _{item.title}
                  </h1>
                </div>
                <div className="bg-[#131313] w-[380px] h-[315px] rounded-xl flex flex-col items-center justify-between shadow-3xl gap-2">
                  <div className="flex flex-col gap-5 items-center">
                    <img
                      className="w-[380px] h-[150px] rounded-lg"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm w-[304px]">{item.description}</p>
                  </div>

                  <div className="w-full pl-5 pb-5 gap-3 flex items-start justify-start">
                    <a
                      href={item.github_link}
                      target="_blank"
                      className="bg-red-500 p-1 px-2 rounded-xl uppercase text-base shadow-2xl transition-colors hover:bg-red-800"
                    >
                      Github
                    </a>

                    <a
                      href={item.projeto_demo}
                      target="_blank"
                      className="bg-red-500 p-1 px-2 rounded-xl uppercase text-base shadow-2xl transition-colors hover:bg-red-800"
                    >
                      demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
