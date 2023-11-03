import type { Metadata } from "next";

import { ContatoForm } from "@/components/ContatoForm";
import { Skills } from "@/components/Skills";

export default async function Home() {
  return (
    <main className="container m-auto p-auto">
      <section className="container h-[32rem] flex justify-center">
        <div className="flex items-center justify-center text-center">
          <div className="block">
            <h1 className="text-5xl font-bold">
              Hi, {"i'm"} <span className="font-bold text-blue-500">&lsaquo;</span>Cheevi
              <span className="font-bold text-blue-500"> /&rsaquo;</span>
            </h1>

            <p className="text-xl md:text-2xl font-normal mt-3">
              Tenho como objetivo crescer como profissional competente e dedicado, estudando e inovando.
            </p>
          </div>
        </div>
      </section>
      <Skills />
      <ContatoForm />
    </main>
  );
}
