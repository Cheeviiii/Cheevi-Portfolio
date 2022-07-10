import { AddressBook, Envelope } from "phosphor-react";

import TrackVisibility from "react-on-screen";

export function Sobre() {
  return (
    <div className="h-screen flex items-center" id="sobre">
      <div className="w-full h-[500px] flex items-center">
        <div className="w-full p-10 flex flex-col md:flex-row items-center justify-center bg-[#141414] border-4 border-[#303030] ">
          <div className="">
            <img
              className="rounded-3xl w-[300px] h-[300px]"
              src="https://i.pinimg.com/564x/ea/57/20/ea57206b99b4aaadcd2baa2f9659c000.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center px-10 my-10">
            <h1 className="font-medium text-2xl ">Sobre Mim</h1>
            <p className="w-[500px] text-center text-lg pt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              incidunt rem voluptates ab fugiat voluptatum eaque asperiores
              consectetur nobis animi obcaecati, suscipit illum. At dolorem
              consequuntur, architecto id nihil necessitatibus.
            </p>
            <div className="flex pt-10">
              <button className="btn">
                <AddressBook className="mx-2" size={32} /> CONTATO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
