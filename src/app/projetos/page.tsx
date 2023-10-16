import ProjetosList from "@/components/ProjetoList/ProjetosList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Projetos",
};

export default function Contato() {
  
  return (
    <main>
      <ProjetosList />
    </main>
  );
}
