import { ContatoForm } from "@/components/ContatoForm";
import { About } from "@/components/About";
import { Introduction } from "@/components/Introduction";

export default function Home() {
  return (
    <main className="container m-auto p-auto pt-5 md:pt-16">
      <Introduction />
      <About />
      <ContatoForm />
    </main>
  );
}
