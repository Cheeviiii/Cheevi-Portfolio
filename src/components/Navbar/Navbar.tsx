import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import * as S from "./styles";
import { Button } from "./components/Button";
import { MobileNav } from "./components/MobileNav";

const menu = [
  { title: "Home", to: "" },
  { title: "Projetos", to: "projetos" },
  { title: "Sobre", to: "sobre" },
  { title: "Contato", to: "contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <S.Container>
      <S.Nav>
        <S.Title href="/">
          <S.Span>&lsaquo;</S.Span>Cheevi<S.Span>/&rsaquo;</S.Span>
        </S.Title>
        <S.ul>
          {menu.map((item, index) => (
            <S.li key={index}>{item.title}</S.li>
          ))}
        </S.ul>

        <div className="relative flex lg:hidden">
          <Button onClick={toggleMenu}>
            <HiBars3 size={32} />
          </Button>

          <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} menu={menu} />
        </div>
      </S.Nav>
    </S.Container>
  );
}
