import { ProjetosList } from "@/components/ProjetosList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Projetos",
};

export default function Projetos() {
  return (
    <main>
      <ProjetosList />
    </main>
  );
}
