"use client";

import { ContatoForm } from "@/components/ContatoForm";
import { About } from "@/components/About";
import { Projetos } from "@/components/Projetos";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", scrollToTop);

    return () => window.removeEventListener("beforeunload", scrollToTop);
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full m-auto p-auto" id="home">
        <About />
        <Projetos />
        <ContatoForm />
      </main>
      <Footer />
    </>
  );
}
