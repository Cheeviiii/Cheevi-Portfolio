"use client";

import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Button } from "./components/Button";
import { MobileNav } from "./components/MobileNav";
import Link from "next/link";

const menu = [
  { title: "Home", to: "/" },
  { title: "Projetos", to: "projetos" },
  { title: "Sobre", to: "sobre" },
  { title: "Contato", to: "contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <header className="w-full flex-row items-center justify-between bg-black/25 p-5 shadow-2xl">
      <nav className="flex items-center justify-between">
        <a className="text-3xl lowercase" href="/">
          <span className="text-blue-500">&lsaquo;</span>Cheevi<span className="text-blue-500">/&rsaquo;</span>
        </a>
        <ul className="gap-5 hidden lg:flex">
          {menu.map((item, index) => (
            <li className="text-xl cursor-pointer transition-colors hover:text-blue-600" key={index}>
              <Link href={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="relative flex lg:hidden">
          <Button onClick={toggleMenu}>
            <HiBars3 size={32} />
          </Button>

          <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} menu={menu} />
        </div>
      </nav>
    </header>
  );
}
