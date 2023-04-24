export function Skills({ data }) {
  return (
    <div
      className="w-full h-screen flex flex-col gap-10 items-center justify-center"
      id="skills"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-around">
        <h1 className="text-2xl font-bold uppercase">
          <span className="text-blue-500">/ </span>Skills
        </h1>
        <span />
      </div>

      {/* Mapeamento das skills */}
      <div className="grid auto-rows-auto md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            className="w-full flex flex-col border-2 border-gray-100 items-center p-2 rounded-xl"
            key={item.id}
          >
            <h1 className="text-2xl text-gray-100 font-bold uppercase">
              {item.title}
            </h1>
            <div className="flex gap-1">
              {item.skills.map((item) => (
                <p
                  className="text-base text-gray-500 font-semibold"
                  key={item.id}
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
