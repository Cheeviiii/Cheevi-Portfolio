export function LoadingSpinner() {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
}
