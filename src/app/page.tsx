import { ContatoForm } from "@/components/ContatoForm";
import { About } from "@/components/About";
import { Introduction } from "@/components/Introduction";
import { Projetos } from "@/components/Projetos";
import { getProjetos } from "@/Utils/getProjetos";

export default function Home() {
  return (
    <main className="container m-auto p-auto pt-5 md:pt-16">
      <Introduction />
      <Projetos projetos={getProjetos} />
      <About />
      <ContatoForm />
    </main>
  );
}
