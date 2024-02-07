import { ProjetoProps } from "@/types";
import axios from "axios";

export default function usePatchProject() {
  const patchProject = async (dados: ProjetoProps, id: string) => {
    await axios
      .patch(`/api/projects/${id}`, dados, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      })
      .catch((err) => console.log(err.message));
  };

  return patchProject;
}
