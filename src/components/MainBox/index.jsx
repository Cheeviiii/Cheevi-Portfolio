import { GithubLogo, LinkedinLogo } from "phosphor-react";

import TrackVisibility from "react-on-screen";

export function MainBox() {
  return (
    <div className="w-full h-screen flex items-center justify-around px-10">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p
                className={
                  isVisible
                    ? "text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInDown"
                    : "hidden"
                }
              >
                Olá, eu sou
              </p>
              <h1
                className={
                  isVisible
                    ? "text-5xl font-medium uppercase text-yellow-500 p-5 animate__animated animate__fadeInLeft"
                    : "hidden"
                }
              >
                Diogo Souza.
              </h1>
              <p
                className={
                  isVisible
                    ? "text-4xl font-medium uppercase text-gray-200 animate__animated animate__fadeInUp"
                    : "hidden"
                }
              >
                Desenvolvedor Front-end
              </p>
              <div className="flex items-center pt-10">
                <button
                  className={
                    isVisible
                      ? "btn animate__animated animate__lightSpeedInLeft"
                      : "hidden"
                  }
                >
                  <LinkedinLogo className="mx-2" size={32} /> Linkedln
                </button>
                <button
                  className={
                    isVisible
                      ? "btn animate__animated animate__lightSpeedInRight"
                      : "hidden"
                  }
                >
                  <GithubLogo className="mx-2" size={32} /> Github
                </button>
              </div>
            </div>

            <img
              className={
                isVisible
                  ? "w-[600px] h-[600px] animate__animated animate__zoomIn"
                  : "hidden"
              }
              src="https://flexjob.fr/wp-content/uploads/2020/11/formation-mieux-teletravailler.png"
              alt=""
            />
          </div>
        )}
      </TrackVisibility>
    </div>
  );
}
