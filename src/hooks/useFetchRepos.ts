import axios from "axios";
import React from "react";

const useFetchRepos = () => {
  const [Repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    const getRepos = async () => {
      const ReposResponse = await axios.get("https://api.github.com/users/cheeviz/repos", {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      });
      const res = ReposResponse.data;
      const ReposURL = res.map((repo: any) => repo.html_url);
      setRepos(ReposURL);
    };
    getRepos();
  }, []);

  return { Repos };
};

export default useFetchRepos;
