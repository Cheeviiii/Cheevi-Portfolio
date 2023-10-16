import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Not found",
};

export default function NotFound() {
  return (
    <div className="w-full py-52 flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl">404</h1>
        <p>Pagina não encontrada</p>
      </div>
      <Link
        className="border-2 px-5 py-1 hover:bg-red-500 transition-colors"
        href="/"
      >
        Voltar para o inicio
      </Link>
    </div>
  );
}
