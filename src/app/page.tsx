import { ContatoForm } from "@/components/ContatoForm";
import { MainBox } from "@/components/MainBox";
import { Projetos } from "@/components/Projetos";
import { Skills } from "@/components/Skills";

export default async function Home() {
  return (
    <main>
      <MainBox />
      <Skills />
      <ContatoForm />
    </main>
  )
}
