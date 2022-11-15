import { GithubLogo, Globe } from "phosphor-react";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjetoViewer } from "../../components/ProjetoViewer";

export const ProjectView = ({ data }) => {
  const { slug } = useParams();

  return <ProjetoViewer data={data} slug={slug} />;
};
