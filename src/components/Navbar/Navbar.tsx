"use client";

import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";
import Link from "next/link";

const menu = [
  { title: "Home", to: "/" },
  { title: "Projetos", to: "#projects" },
  { title: "Sobre", to: "#about" },
  { title: "Contato", to: "#contact" },
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
    <header className="w-full fixed bg-white flex-row items-center justify-between p-5">
      <div className="flex items-center justify-between">
        <a className="text-3xl font-bold" href="/">
          <span className="text-blue">&lsaquo;</span>Diogo
          <span className="text-blue">/&rsaquo;</span>
        </a>
        <ul className="gap-5 hidden lg:flex">
          {menu.map((item, index) => (
            <li
              className="text-xl font-bold cursor-pointer transition-colors hover:text-blue"
              key={index}
            >
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
      </div>
    </header>
  );
}
