import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Inicio = () => {
  const code = `function sayHello() {
    console.log('Olá!');
  }`;

  const code2 = `
  msg = int(input('Digite um número para ver a tabuada: '))

  for count in range(10):
  print(f'{msg} x {count+1} = {msg*(count+1)}')`;

  return (
    <div className="container mx-auto pt-32 md:pt-0">
      <div className="h-screen flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center">
        <div className="flex flex-col gap-5">
          <div className="md:w-[600px] flex flex-col items-center md:items-start gap-2">
            <p className="text-2xl md:text-2xl text-gray-200 text-start">
              Olá, me chamo
            </p>
            <h1 className="text-5xl">Diogo Souza.</h1>
            <p className="text-3xl text-red-500">{"> front-end developer"}</p>
          </div>

          <div className="flex flex-col items-center md:items-start w-[500px] lg:w-[600px] pt-10">
            <p className="text-gray-500 text-start text-xs md:text-base">
              // Você também pode ver na minha pagina do Github
            </p>
            <div className="flex gap-2">
              <p className="text-pink-500">const</p>
              <p className="text-yellow-500">github_link</p>
              <p className="text-blue-400"> = </p>
              <a
                className="text-green-400"
                href="https://github.com/Cheeviiii"
                target="_blank"
              >
                "https://github.com/Cheeviiii"
              </a>
            </div>
          </div>
        </div>

        <div className="p-10 w-[500px] h-auto flex flex-col gap-14 bg-[#131313] shadow-2xl rounded-xl">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img
                className="w-14 h-14 rounded-full "
                src="https://i.pinimg.com/564x/e8/ee/30/e8ee30ddc4ebe81627a42d27f70e5232.jpg"
                alt="Cheevi"
              />
              <div>
                <h1 className="text-red-700">@cheevi</h1>
                <p className="text-[#919191] text-sm">
                  Criado há 1 ano atrás
                </p>
              </div>
            </div>

            <div className="">
              <SyntaxHighlighter
                language="javascript"
                style={vs2015}
                className="rounded-xl bg-black"
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <img
                className="w-14 h-14 rounded-full "
                src="https://i.pinimg.com/564x/3e/c5/c6/3ec5c6dcb6e776fe4c5200ef9394c976.jpg"
                alt="Cheevi"
              />
              <div>
                <h1 className="text-red-700">@cheevi</h1>
                <p className="text-[#919191] text-sm">
                  Criado há 5 meses atrás
                </p>
              </div>
            </div>

            <div className="relative block">
              <SyntaxHighlighter
                style={vs2015}
                language="python"
                className="rounded-xl bg-black"
              >
                {code2}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
