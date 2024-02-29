"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LoadingCard } from "../Loading";
import { useFetchProjectID } from "@/hooks/useFetchProjects";

interface CardProps {
  id: string;
}

export function CardProject({ id }: CardProps) {
  const { Project, Loading } = useFetchProjectID(id);

  return (
    <>
      {Loading ? (
        <LoadingCard />
      ) : (
        <div className="w-full rounded-xl flex flex-col items-center justify-between gap-5">
          <div className="w-full flex flex-col gap-5">
            <img
              className="w-[100%] h-[25rem] rounded-xl"
              src={
                Project?.image == ""
                  ? "https://www.pallenz.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  : Project?.image
              }
              alt={Project?.title}
            />
            <h1 className="text-3xl font-bold text-left">{Project?.title}</h1>

            <div className="w-full flex items-start gap-2">
              {Project?.types?.map((type: string, index: number) => (
                <p className="bg-gray-400 dark:bg-white p-1 rounded text-white dark:text-black" key={index}>
                  {type}
                </p>
              ))}
            </div>
            <p className="text-lg font-medium">{Project?.description}</p>
          </div>

          <div className="w-full flex gap-2 md:left-0 mt-3">
            <a href={Project?.repository} target="_blank">
              <button
                className={`bg-gray-300 mt-2 rounded-xl text-xl text-white px-3 text-center py-2 transition-colors  ${
                  Project?.repository ? "hover:bg-blue-300" : "opacity-20 cursor-not-allowed"
                }`}
                disabled={Project?.repository ? false : true}
              >
                {Project?.repository ? "Repositório" : "Sem repositório"}
              </button>
            </a>

            <a href={Project?.preview_url} target="_blank">
              <button
                className={`bg-gray-300 mt-2 rounded-xl text-xl text-white px-3 text-center py-2 transition-colors  ${
                  Project?.repository ? "hover:bg-blue-300" : "opacity-20 cursor-not-allowed"
                }`}
                disabled={Project?.preview_url ? false : true}
              >
                {Project?.preview_url ? "Preview" : "Sem preview"}
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
