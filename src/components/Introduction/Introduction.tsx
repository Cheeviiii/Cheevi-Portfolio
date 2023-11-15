import vector from "@/assets/developer-vector.svg";
import Image from "next/image";

export function Introduction() {
  return (
    <section className="w-full h-[45rem] md:h-[36rem] flex justify-center md:my-[120px]">
      <div className="flex items-center justify-center text-center md:text-left">
        <div className="md:w-[32rem]">
          <h1 className="text-5xl font-bold">
            Hi, {"i'm"} <span className="font-bold text-blue">&lsaquo;</span>
            Diogo
            <span className="font-bold text-blue"> /&rsaquo;</span>
          </h1>

          <p className="text-xl font-medium text-gray mt-3">
            Tenho como objetivo crescer como profissional competente e dedicado,
            estudando e inovando.
          </p>
        </div>

        <Image className="hidden md:flex" src={vector} alt="Vector" />
      </div>
    </section>
  );
}
