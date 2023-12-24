import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Skills } from ".";

export function About() {
  const handleDownload = () => {
    const pdfPath = "/donwload/Curriculo.pdf";

    const Link = document.createElement("a");
    Link.href = pdfPath;
    Link.download = "curriculo.pdf";

    document.body.appendChild(Link);

    Link.click();

    document.body.removeChild(Link);
  };

  return (
    <section className="relative w-full h-[50rem] bg-[url(/images/aboutbg.jpg)] bg-cover bg-no-repeat  flex justify-center" id="about">
      <div className="absolute bottom-0 top-0 inset-0 z-10 w-full bg-[#11141bab] backdrop-blur-sm" />

      <div className="relative md:w-2/3 flex flex-col gap-5 md:gap-10 md:flex-row items-center justify-center md:justify-between text-center md:text-left inset-0 z-20">
        <div className="w-full">
          <h1 className="text-3xl xl:text-7xl font-bold">Desenvolvedor front-end</h1>

          <p className="md:w-2/3 text-xl md:text-xl font-medium mt-3">
            Sou um desenvolvedor em busca de aprendizado e aprimoramento, estou constantemente procurando a melhorar minhas habilidades
          </p>

          <button className="bg-blue-300 w-32 py-3 mt-5 text-2xl font-bold rounded-xl transition-colors hover:bg-blue-200" onClick={handleDownload}>
            CV
          </button>
        </div>

        <div className="flex md:flex-col gap-6">
          <a className="transition hover:scale-110" href="https://www.github.com/cheeviz" target="_blank">
            <BsGithub className="" size={50} />
          </a>
          <a className="transition hover:scale-110" href="#">
            <BsLinkedin className="" size={50} />
          </a>
        </div>

        <div className="absolute bottom-0 w-full flex flex-col items-center justify-center md:my-10 gap-3">
          <h1 className="text-4xl font-bold uppercase">Skills</h1>
          <Skills />
        </div>
      </div>
    </section>
  );
}
