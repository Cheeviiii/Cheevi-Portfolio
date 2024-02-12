import { ProjetoProps } from "@/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchProject = (includePublished = false) => {
  const [Projects, setProject] = useState<ProjetoProps[]>([]);
  const [Loading, setLoading] = useState<Boolean>(true);

  const fetchData = useCallback(async () => {
    const url = includePublished ? "/api/projects?published=true" : "/api/projects";

    try {
      const res = await axios.get(url, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });
      setProject(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [includePublished]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateProjects = () => {
    fetchData();
    console.log("Chamei rsrs");
  };

  return { Projects, Loading, updateProjects };
};

const useFetchProjectID = (id: string) => {
  const [Project, setProject] = useState<ProjetoProps>();
  const [Loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
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

const useFetchCurrentProject = () => {
  const FetchData = async (id: string) => {
    const response = await fetch(`/api/projects/${id}`, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    });

    const data = await response.json();
    return data;
  };

  return { FetchData };
};
export { useFetchProject, useFetchProjectID, useFetchCurrentProject };
