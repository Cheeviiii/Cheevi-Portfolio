export function Contato() {
  return (
    <section
      className="w-full h-screen flex items-center justify-center"
      id="contato"
    >
      <div className="bg-[#141414] border-4 border-[#303030] w-full p-5 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl uppercase">
          Quer entrar em contato?
        </h1>
        <div className="my-10">
          <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
              <input
                className="w-[350px] h-[45px] px-2 font-semibold rounded text-black outline-none"
                type="text"
                placeholder="Nome"
                required
              />
            </div>

            <div className="pt-5">
              <input
                className="w-[350px] h-[45px] px-2 rounded font-semibold text-black outline-none"
                type="text"
                placeholder="Email"
                required
              />
            </div>

            <div className="pt-5">
              <textarea
                className="w-[350px] px-2 rounded font-semibold text-black outline-none"
                cols="30"
                rows="5"
                placeholder="Digite Sua Mensagem..."
              ></textarea>
            </div>

            <div className="pt-10">
              <button className="bg-yellow-300 h-14 px-10 text-black font-medium uppercase text-2xl rounded-xl cursor-pointer hover:scale-110 transition-transform">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
