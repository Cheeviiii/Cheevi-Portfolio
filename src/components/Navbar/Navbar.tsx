"use client";

import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";
import { scrollTo } from "@/lib/scrollTo";
import DarkModeSwitch from "../DarkModeSwitch";
import { useScroll } from "@/context/ScrollContext";

const menu = [
  { title: "Sobre", to: "#about" },
  { title: "Projetos", to: "#projects" },
  { title: "Contato", to: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { visible } = useScroll();

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  const animationScale = visible
    ? " xl:border xl:border-black dark:border-gray-300 xl:w-[50%] duration-500  xl:mt-5 p-5 xl:p-2"
    : "duration-500 w-full p-5";

  return (
    <header
      className={`fixed bg-white dark:bg-black ${animationScale} rounded flex items-center m-auto justify-between lg:justify-around z-50 inset-x-0`}
    >
      <a className="text-2xl md:text-4xl font-bold text-black dark:text-white" href="/" aria-label="home">
        {"<diogo />"}
      </a>
      <ul className="gap-5 hidden xl:flex lg:p-2 ">
        {menu.map((item, index) => (
          <li
            className="text-black dark:text-white text-xl font-bold cursor-pointer hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black hover:rounded-full p-1 px-2"
            key={index}
          >
            <a onClick={() => scrollTo(item.to.substring(1))} aria-label={item.title}>
              {item.title}
            </a>
          </li>
        ))}
        <DarkModeSwitch />
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
