export const ProjetoLoading = () => {
  return (
    <div className="relative w-full bg-[#e9e9e9] dark:bg-[#17181a] rounded-xl flex flex-col items-center justify-between p-5 gap-3 shadow-xl">
      <div className="flex items-start flex-col gap-3">
        <div className="w-[350px] h-[200px] md:w-[350px] md:h-[200px] bg-gray-300 rounded-xl shadow-lg border border-gray-300 animate-pulse" />
        <div className="w-36 bg-gray-300 h-5 rounded animate-pulse" />
        <div className="w-full flex items-start gap-2">
          <div className="w-[100px] h-[20px] bg-gray-300 text-white font-bold p-1 rounded animate-pulse" />
        </div>
        <div className="w-[120px] h-[20px] bg-gray-300 animate-pulse rounded" />
      </div>
    </div>
  );
};
