import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TodosProjetos = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();

      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-10 pb-5">
      <div className="md:py-20 flex flex-col gap-5 items-center justify-center">
        <h1 className="text-4xl font-bold text-[#c2c2c2]">_projetos</h1>

        {isLoading == false ? (
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-7 gap-x-20">
            {posts.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex gap-2 items-center">
                  <p className="text-red-500 text-bold">Project {index + 1}</p>
                  <h1 className="text-base text-[#c1c1c1] lowercase">
                    // _{item.title}
                  </h1>
                </div>
                <div className="bg-[#131313] w-[380px] h-[315px] rounded-xl flex flex-col items-center justify-between gap-2">
                  <div className="flex flex-col gap-5 items-center">
                    <img
                      className="w-[380px] h-[150px] rounded-lg"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>

                  <div className="flex items-center">
                    <p className="w-[304px]">
                      Duis aute irure dolor in velit esse cillum dolore.
                    </p>
                  </div>

                  <div className="w-full pl-5 pb-5 flex items-start justify-start">
                    <Link
                      to={`/projeto/${item.slug}`}
                      className="bg-red-500 p-1 px-2 rounded-xl lowercase text-base transition-colors hover:bg-red-800"
                    >
                      VIEW PROJECT
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="font-normal text-2xl text-[#c1c1c1] lowercase text-center">
            Carregando projetos...
          </h1>
        )}
      </div>
    </div>
  );
};
