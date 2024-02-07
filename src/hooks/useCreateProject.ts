import { ProjetoProps } from "@/types";
import axios from "axios";

export default function useCreateProject() {
  const createProject = async (dados: ProjetoProps) => {
    await axios
      .post("/api/projects", dados, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      })
      .catch((err) => console.log(err.message));
  };

  return createProject;
}
