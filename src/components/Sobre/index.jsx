import { AddressBook, Envelope } from "phosphor-react";

export function Sobre() {
  return (
    <div className="h-screen flex items-center justify-center" id="sobre">
      <div className="w-full h-[500px] flex items-center">
        <div className="w-full p-10 flex flex-col lg:flex-row items-center justify-center bg-[#141414] border-4 border-[#303030] ">
          <div className="px-10">
            {/* <img
              className="rounded-xl md:rounded-3xl w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
              src="https://i.pinimg.com/564x/ea/57/20/ea57206b99b4aaadcd2baa2f9659c000.jpg"
              alt=""
            /> */}
          </div>
          <div className="flex flex-col items-center my-10">
            <h1 className="font-medium text-2xl">Sobre Mim</h1>
            <p className="w-full text-center md:text-start md:w-[500px] text-lg pt-5 md:indent-8">
              Olá me chamo Diogo tenho 20 anos e desde de criança sou apaixonado
              por tecnología. Primeiro contato que tive com programação foi em
              2014 ~ 2015 com Java onde eu fazia alguns plugins para servidor de
              Minecraft, apesar que comecei a focar em 2020, eu já sabia o
              básico de html e css
            </p>

            <p className="w-full text-center md:text-start md:w-[500px] text-lg pt-5 indent-8">
              Hoje já entendo bem de front-end usando react as vezes brinco um
              pouco com back-end fazendo algumas api rest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
