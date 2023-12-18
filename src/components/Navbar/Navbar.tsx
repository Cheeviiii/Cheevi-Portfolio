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

  const [prevScroll, setPrevScroll] = useState({
    y: 0,
    lastY: 0,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setPrevScroll((prevScroll) => {
        return {
          y: window.scrollY,
          lastY: prevScroll.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevScroll.y > 250) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [prevScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  const scrollTo = (id: any) => {
    const sectionRef = document.getElementById(id);

    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollHeader = ` ${visible ? "xl:w-[80%] bg-[#171718] xl:bg-[#171718f1] xl:translate-y-5" : "w-full bg-[#171718] xl:bg-transparent xl:translate-x-0"}`;

  return (
    <header className={`fixed rounded flex items-center m-auto justify-between  z-50 inset-x-0 duration-700 p-5 ${scrollHeader}`}>
      <a className="text-2xl md:text-5xl font-bold" href="/">
        Diogo
      </a>
      <ul className="gap-5 hidden xl:flex lg:bg-blue-300 lg:p-2 lg:rounded-full shadow-xl">
        {menu.map((item, index) => (
          <li
            className="text-white text-xl font-bold cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:rounded-full p-1 px-2"
            key={index}
          >
            <a onClick={() => scrollTo(item.to.substring(1))}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="relative flex xl:hidden">
        <Button onClick={toggleMenu}>
          <HiBars3 size={32} />
        </Button>

        <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} menu={menu} />
      </div>
    </header>
  );
}
