import React from "react";
import { Link } from "react-router-dom";
import { AllProjects } from "../../components/AllProjects";

export const Projects = ({ data }) => {
  return (
    <main className="flex flex-col items-center justify-center gap-20">
      <div className="flex items-center justify-center">
        {/* Header da pagina */}
        <Link to="/" className="text-5xl uppercase m-4 text-blue-500">
          &lsaquo;Cheevi/&rsaquo;
        </Link>
      </div>

      {/* Componente de visualização dos projetos */}
      <AllProjects projetos={data} />
    </main>
  );
};
