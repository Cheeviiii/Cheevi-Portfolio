import { AddressBook, Envelope } from "phosphor-react";

import TrackVisibility from "react-on-screen";

export function Sobre() {
  return (
    <div className="h-screen flex items-center justify-center" id="sobre">
      <div className="w-full h-[500px] bg-[#141414] border-4 border-[#303030] flex items-center justify-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div className="flex">
              <div className="">
                <img
                  className={
                    isVisible
                      ? "rounded-3xl w-[300px] h-[300px] animate__animated animate__fadeInLeftBig"
                      : "hidden"
                  }
                  src="https://i.pinimg.com/564x/ea/57/20/ea57206b99b4aaadcd2baa2f9659c000.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center px-10">
                <h1
                  className={
                    isVisible
                      ? "font-medium text-2xl animate__animated animate__fadeInDown"
                      : "hidden"
                  }
                >
                  Sobre Mim
                </h1>
                <p className={isVisible ? "w-[500px] text-center text-lg pt-5 animate__animated animate__fadeInUp" : 'hidden'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  incidunt rem voluptates ab fugiat voluptatum eaque asperiores
                  consectetur nobis animi obcaecati, suscipit illum. At dolorem
                  consequuntur, architecto id nihil necessitatibus.
                </p>
                <div className="flex pt-10">
                  <button className={isVisible ? "btn animate__animated animate__lightSpeedInRight" : 'hidden'}>
                    <AddressBook  className="mx-2" size={32} /> CONTATO
                  </button>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
}
