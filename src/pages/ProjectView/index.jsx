import React from "react";
import { useParams } from "react-router-dom";
import { ProjetosMap } from "../../service/data";

export const ProjectView = () => {
  const { slug } = useParams();

  return (
    <div>
      {ProjetosMap.map((item, slug) => {
        (
          <div>{item.title}</div>
        )
      })}
    </div>
  )
};
