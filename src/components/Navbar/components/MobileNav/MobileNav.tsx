import { HiXMark } from "react-icons/hi2";
import { Button } from "../Button";
import * as S from "./styles";

type MobileNavProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menu: [] | any;
};

export function MobileNav({ isOpen, toggleMenu, menu }: MobileNavProps) {
  return (
    <S.Container $isopen={isOpen}>
      <S.Content>
        <S.Box>
          <Button className="absolute right-0 z-50 p-5" onClick={toggleMenu}>
            <HiXMark size={32} />
          </Button>

          <S.MenuBox>
            <S.MenuContent>
              <S.MenuLinkList>
                {menu.map((item: any, index: any) => (
                  <S.MenuLink key={index}>{item.title}</S.MenuLink>
                ))}
              </S.MenuLinkList>
            </S.MenuContent>
          </S.MenuBox>
        </S.Box>
      </S.Content>
    </S.Container>
  );
}
