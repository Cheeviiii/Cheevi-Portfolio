import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

import lista_de_tarefas from "../assets/lista_de_tarefas.png";
import portfolio from "../assets/portfolio.png";
import password_generator from "../assets/password_generator.png";
import { Card } from "../components/Card";

export const TodosProjetos = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const projetosInLocal = [
    {
      title: "LISTA DE TAREFAS",
      description:
        "Um aplicativo de lista de tarefas simples, permite que os usuários adicionem, excluam e marquem as tarefas como concluidas.",
      thumbnail: lista_de_tarefas,
      github_link: "https://github.com/Cheeviiii/lista-de-tarefas",
      projeto_demo: "https://lista-de-tarefas-indol-sigma.vercel.app/",
    },

    {
      title: "PORTFOLIO",
      description:
        "Projeto web de portfolio onde compartilho minhas habilidades, experiências e projetos anteriores de forma visualmente atraente e fácil de navegar.",
      thumbnail: portfolio,
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

    {
      title: "PASSWORD GENERATOR",
      description:
        "Projeto simples de um gerador de senhas aleatórias, onde você pode escolher entre o tamanho, letras minúsculas, maiúscula e caracteres especiais",
      thumbnail: password_generator,
      github_link: "https://github.com/Cheeviiii/controle-financeiro",
      projeto_demo: "https://controle-financeiro-weld.vercel.app/",
    },
  ];

  useEffect(() => {
    async function fetchPosts() {
      await new Promise((resolve) => setTimeout(resolve, 500));

      await fetch(`${import.meta.env.VITE_API_URL}/posts`)
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
              <Card
                index={index}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                githublink={item.github_link}
                projetodemolink={item.projeto_demo}
              />
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
