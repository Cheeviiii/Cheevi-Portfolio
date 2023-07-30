export const Card = (props) => {
  return (
    <div className="flex flex-col gap-2" key={props.index}>
      <div className="flex gap-2 items-center">
        <p className="text-red-500 text-bold">Project {props.index + 1}</p>
        <h1 className="text-base text-[#c1c1c1] lowercase">
          // _{props.title}
        </h1>
      </div>
      <div className="bg-[#131313] w-[380px] h-[315px] rounded-xl flex flex-col items-center justify-between shadow-3xl gap-2">
        <div className="flex flex-col gap-5 items-center">
          <img
            className="w-[380px] h-[150px] rounded-lg"
            src={props.thumbnail}
            alt={props.title}
          />
        </div>

        <div className="flex items-center">
          <p className="text-sm w-[304px]">{props.description}</p>
        </div>

        <div className="w-full pl-5 pb-5 gap-3 flex items-start justify-start">
          <a
            href={props.githublink}
            target="_blank"
            className="bg-red-500 p-1 px-2 rounded-xl uppercase text-base shadow-2xl transition-colors hover:bg-red-800"
          >
            Github
          </a>

          <a
            href={props.projetodemolink}
            target="_blank"
            className="bg-red-500 p-1 px-2 rounded-xl uppercase text-base shadow-2xl transition-colors hover:bg-red-800"
          >
            demo
          </a>
        </div>
      </div>
    </div>
  );
};
