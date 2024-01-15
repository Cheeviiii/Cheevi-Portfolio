"use client";

/* eslint-disable @next/next/no-img-element */

import { ProjetoProps } from "@/types";
import React from "react";
import { LoadingSpinner } from "../Loading";

interface CardProps {
  id: string;
}

export function CardProject({ id }: CardProps) {
  const [projeto, setProjeto] = React.useState<ProjetoProps>();
  const [Loading, setLoading] = React.useState<Boolean>(false);

  const getProject = async (id: string) => {
    setLoading(true);
    const response = await fetch(`/api/projects/${id}`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });

    const data = await response.json();
    setProjeto(data);
    setLoading(false);
  };

  React.useEffect(() => {
    getProject(id);
  }, [id]);

  const noRepo =
    projeto?.repository === ""
      ? "opacity-25 cursor-not-allowed"
      : "opacity-100";

  return (
    <>
      {Loading ? (
        <LoadingSpinner />
      ) : (
        <div className="border border-gray-300 text-twhite dark:text-white rounded-xl flex flex-col items-center justify-between p-5 gap-5">
          <div className="w-full flex flex-col gap-5">
            <img
              className="w-[100%] h-[25rem] rounded-xl shadow-lg border border-gray-300"
              src={
                projeto?.image == ""
                  ? "https://www.pallenz.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  : projeto?.image
              }
              alt={projeto?.title}
            />
            <h1 className="text-3xl font-bold text-left">{projeto?.title}</h1>

            <div className="w-full flex items-start gap-2">
              {projeto?.types?.map((type, index) => (
                <p className="bg-red-200 p-1 rounded text-white" key={index}>
                  {type}
                </p>
              ))}
            </div>
            <p className="text-lg font-medium">{projeto?.description}</p>
          </div>

          <div className="w-full flex gap-2 md:left-0 mt-3">
            <a
              href={projeto?.repository}
              target="_blank"
              className={`${noRepo} bg-gray-300 mt-2 rounded-xl text-xl text-white px-3 text-center py-2 transition-colors shadow-lg`}
            >
              repositório
            </a>
          </div>
        </div>
      )}
    </>
  );
}
