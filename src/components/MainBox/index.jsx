import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function MainBox() {
  return (
    <div className="w-full h-screen flex items-center justify-around px-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInDown">
            Olá, eu sou
          </p>
          <h1 className="text-5xl font-medium uppercase text-yellow-500 p-5 animate__animated animate__fadeInLeft">
            Diogo Souza.
          </h1>
          <p className="text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInUp">
            Desenvolvedor Front-end
          </p>
          <div className="flex items-center pt-10">
            <button className="btn animate__animated animate__lightSpeedInLeft">
              <LinkedinLogo className="mx-2" size={32} /> Linkedln
            </button>
            <button className="btn animate__animated animate__lightSpeedInRight">
              <GithubLogo className="mx-2" size={32} /> Github
            </button>
          </div>
        </div>

        <img
          className="w-[600px] h-[600px] animate__animated animate__zoomIn hidden lg:block"
          src="https://flexjob.fr/wp-content/uploads/2020/11/formation-mieux-teletravailler.png"
          alt=""
        />
      </div>
    </div>
  );
}
