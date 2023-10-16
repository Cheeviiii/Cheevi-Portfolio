import type { Metadata } from "next";

import { ContatoForm } from "@/components/ContatoForm";
import { MainBox } from "@/components/MainBox";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Portfolio | Home"
}

export default async function Home() {

  return (
    <main>
      <MainBox />
      <Skills />
      <ContatoForm />
    </main>
  )
}
