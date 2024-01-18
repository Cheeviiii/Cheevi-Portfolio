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
        <div className="border border-gray-300 text-twhite dark:text-white rounded-xl flex flex-col items-center justify-between p-5 gap-5">
          <div className="w-full flex flex-col gap-5">
            <img
              className="w-[100%] h-[25rem] rounded-xl shadow-lg border border-gray-300"
              src={
                Project?.image == ""
                  ? "https://www.pallenz.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  : Project?.image
              }
              alt={Project?.title}
            />
            <h1 className="text-3xl font-bold text-left">{Project?.title}</h1>

            <div className="w-full flex items-start gap-2">
              {Project?.types?.map((type, index) => (
                <p className="bg-red-200 p-1 rounded text-white" key={index}>
                  {type}
                </p>
              ))}
            </div>
            <p className="text-lg font-medium">{Project?.description}</p>
          </div>

          <div className="w-full flex gap-2 md:left-0 mt-3">
            {Project?.repository ? (
              <a href={Project?.repository} target="_blank" className="bg-gray-300 mt-2 rounded-xl text-xl text-white px-3 text-center py-2 transition-colors hover:bg-blue-300">
                Repositório
              </a>
            ) : (
              <button className="bg-gray-300 opacity-25 cursor-not-allowed mt-2 rounded-xl text-xl text-white px-3 text-center py-2 transition-colors" disabled={true}>
                Sem Repositório
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
