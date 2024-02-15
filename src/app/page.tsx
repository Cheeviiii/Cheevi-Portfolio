import { Contato } from "@/components/Contato";
import { About } from "@/components/About";
import { Projetos } from "@/components/Projetos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/Scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="w-full m-auto p-auto" id="home">
        <About />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
