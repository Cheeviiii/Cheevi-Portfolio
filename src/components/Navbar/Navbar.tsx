"use client";

import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

const menu = [
  { title: "Sobre", to: "#about" },
  { title: "Projetos", to: "#projects" },
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

  const scrollTo = (id: string) => {
    const sectionRef = document.getElementById(id);

    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`absolute rounded flex items-center m-auto justify-between lg:justify-around z-50 inset-x-0 duration-700 p-5`}
    >
      <a className="text-2xl md:text-2xl font-bold text-red-200" href="/">
        {"<diogo />"}
      </a>
      <ul className="gap-5 hidden xl:flex lg:p-2 ">
        {menu.map((item, index) => (
          <li
            className="text-white text-xl font-bold cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:rounded-full p-1 px-2"
            key={index}
          >
            <a
              onClick={() => scrollTo(item.to.substring(1))}
              aria-label={item.title}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative flex xl:hidden">
        <Button onClick={toggleMenu} aria-label="OPEN NAVIGATOR MENU">
          <HiBars3 size={32} />
        </Button>

        <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} menu={menu} />
      </div>
    </header>
  );
}
