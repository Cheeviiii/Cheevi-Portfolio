import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Atom, FileCss, FileHtml, FileJs, GithubLogo, Globe } from "phosphor-react";

export const ProjectView = () => {
  const { slug } = useParams();

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        /* console.log(`data ${slug} => `, data); */
        setPost(data);
      });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        key={post.id}
        className="flex flex-col xl:flex-row items-center justify-center gap-5 h-[800px]"
      >
        <img
          src={post.thumbnail}
          alt={post.title}
          className="md:w-[500px] md:h-[300px] rounded-2xl border-2 border-blue-500"
        />
        <div className="flex items-center flex-col gap-3 text-center">
          <div className="w-full flex flex-col gap-5">
            <h1 className="font-bold text-4xl uppercase">{post.title}</h1>
            {/* <p className="text-xl">{item.description}</p> */}
          </div>
          <div className="flex gap-2">
            {post.linguanges?.map((item, index) => (
              <div key={index}>
                <h1>{item === "javascript" ? <FileJs size={32} /> : ""}</h1>
                <h1>{item === "html" ? <FileHtml size={32} /> : ""}</h1>
                <h1>{item === "css" ? <FileCss size={32} /> : ""}</h1>
                <h1>{item === "react" ? <Atom size={32} /> : ""}</h1>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center pt-10 gap-5">
            {post.projeto_link === "" ? (
              <button
                type="button"
                className="flex items-center px-5 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 disabled:opacity-25"
                disabled
              >
                <Globe className="mx-2" size={32} /> Link não encontrato,
              </button>
            ) : (
              <a
                href={post.projeto_link}
                target="_blank"
                className="flex items-center px-5 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 md:hover:border-red-500 transition-colors"
              >
                <Globe className="mx-2" size={32} /> Link Do Projeto
              </a>
            )}
            {post.github_link === "" ? (
              <button
                type="button"
                className="flex items-center px-5 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 disabled:opacity-25"
                disabled
              >
                <GithubLogo className="mx-2" size={32} /> Github não encontrado.
              </button>
            ) : (
              <a
                href={post.github_link}
                target="_blank"
                className="flex items-center px-10 border-2 border-blue-500 rounded-3xl text-lg uppercase font-bold py-4 md:hover:border-red-500 transition-colors"
              >
                <GithubLogo className="mx-2" size={32} /> Github
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
