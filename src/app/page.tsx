import Image from "next/image";
import { ContatoForm } from "@/components/ContatoForm";
import About from "@/components/About";
import vector from "@/assets/developer-vector.svg";

export default function Home() {
  return (
    <main className="container m-auto p-auto pt-5 md:pt-16">
      <section className="w-full h-[36rem] flex justify-center">
        <div className="flex items-center justify-center text-center md:text-left">
          <div className="md:w-[32rem]">
            <h1 className="text-5xl font-bold">
              Hi, {"i'm"} <span className="font-bold text-blue">&lsaquo;</span>Cheevi
              <span className="font-bold text-blue"> /&rsaquo;</span>
            </h1>

            <p className="text-xl font-medium text-gray mt-3">
              Tenho como objetivo crescer como profissional competente e dedicado, estudando e inovando.
            </p>
          </div>

          <Image className="hidden md:flex" src={vector} alt="Vector" />
        </div>
      </section>
      <About />
      <ContatoForm />
    </main>
  );
}
