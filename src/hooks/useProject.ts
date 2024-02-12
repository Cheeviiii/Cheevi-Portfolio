import { ProjetoProps } from "@/types";
import axios from "axios";

interface ProjectValuesProps {
  createProject: (dados: ProjetoProps) => void;
  patchProject: (dados: ProjetoProps, id: string) => void;
}

export function useProject() {
  const createProject = async (dados: ProjetoProps) => {
    await axios
      .post("/api/projects", dados, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      })
      .catch((err) => console.log(err.message));
  };

  const patchProject = async (dados: ProjetoProps, id: string) => {
    await axios
      .patch(`/api/projects/${id}`, dados, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      })
      .catch((err) => console.log(err.message));
  };

  const ProjectValues: ProjectValuesProps = {
    createProject,
    patchProject,
  };

  return ProjectValues;
}
