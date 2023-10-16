import { ContatoForm } from "@/components/ContatoForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Contato",
};

export default function Contato() {
  return (
    <main>
      <ContatoForm />
    </main>
  );
}
