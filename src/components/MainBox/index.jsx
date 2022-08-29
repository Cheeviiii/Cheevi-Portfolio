import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function MainBox() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex items-center justify-center xl:justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl md:text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInDown">
            Olá, eu sou
          </p>
          <h1 className="text-4xl font-medium uppercase text-yellow-500 py-2 md:py-5 animate__animated animate__fadeInLeft">
            Diogo Souza.
          </h1>
          <p className="text-xl md:text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInUp">
            Desenvolvedor Front-end
          </p>
          <div className="w-full flex items-center justify-center pt-10">
            <a
              className="btn-mainbox animate__animated animate__lightSpeedInLeft"
              href="https://www.linkedin.com/in/diogo-souza-alves-77345b220/"
              target="_blank"
            >
              <LinkedinLogo className="mx-2" size={32} /> Linkedln
            </a>
            <a
              className="btn-mainbox animate__animated animate__lightSpeedInRight"
              href="https://github.com/Cheeviiii"
              target="_blank"
            >
              <GithubLogo className="mx-2" size={32} /> Github
            </a>
          </div>
        </div>

        <img
          className="w-[600px] h-[600px] animate__animated animate__zoomIn hidden xl:block"
          src="https://flexjob.fr/wp-content/uploads/2020/11/formation-mieux-teletravailler.png"
          alt=""
        />
      </div>
    </div>
  );
}
