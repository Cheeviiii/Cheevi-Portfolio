import { HiXMark } from "react-icons/hi2";
import { Button } from "../Button";
import Link from "next/link";

type MobileNavProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menu: [] | any;
};

export function MobileNav({ isOpen, toggleMenu, menu }: MobileNavProps) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} relative`}>
      <div className="flex items-center justify-center">
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md">
          <Button className="absolute right-0 z-50 p-5 " onClick={toggleMenu}>
            <HiXMark size={32} />
          </Button>

          <div className="fixed inset-0 flex items-center justify-center p-5">
            <div className="bg-[#1b1b1b] border border-gray-500 rounded-3xl w-[500px] p-5">
              <ul className="flex-row">
                {menu.map((item: any, index: any) => (
                  <li className="p-2 border-b cursor-pointer" key={index}>
                    <Link href={item.to} onClick={toggleMenu}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
