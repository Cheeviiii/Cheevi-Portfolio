export function LoadingCard() {
  return (
    <div className="border border-gray-300 text-twhite dark:text-white rounded-xl flex flex-col items-center justify-between p-5 gap-5">
      <div className="w-full flex flex-col gap-5">
        <div className="w-[100%] h-[25rem] rounded shadow-lg bg-gray-300 animate-pulse" />
        <div className="text-3xl font-bold text-left" />

        <div className="bg-gray-300 w-44 h-5 animate-pulse rounded" />

        <div className="bg-gray-300 w-64 h-10 animate-pulse rounded" />

        <div className="flex gap-5">
          <div className="bg-gray-300 w-32 h-5 animate-pulse rounded" />
          <div className="bg-gray-300 w-32 h-5 animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}
