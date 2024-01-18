import { ProjetoProps } from "@/types";
import React from "react";

const useFetchProject = () => {
  const [Projects, setProject] = React.useState<ProjetoProps[]>([]);
  const [Loading, setLoading] = React.useState<Boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (!response.ok) {
        throw new Error("Erro na solicitação");
      }

      const data = await response.json();
      setProject(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const updateProjects = () => {
    fetchData();
  };

  return { Projects, Loading, updateProjects };
};

const useFetchProjectID = (id: string) => {
  const [Project, setProject] = React.useState<ProjetoProps>();
  const [Loading, setLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(`/api/projects/${id}`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      const data = await response.json();
      setProject(data);
      setLoading(false);
    };

    FetchData();
  }, [id]);

  return { Project, Loading };
};
export { useFetchProject, useFetchProjectID };
