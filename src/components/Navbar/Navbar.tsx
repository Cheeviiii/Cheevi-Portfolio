"use client";

import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";

const menu = [
  { title: "Projetos", to: "#projects" },
  { title: "Sobre", to: "#about" },
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

  return (
    <header
      id="navbar-scroll"
      className={`w-full fixed bg-transparent flex-row items-center justify-between p-5 ${
        visible ? "opacity-0 duration-500" : "duration-500 opacity-100"
      }`}
    >
      <div className="flex lg:flex-col gap-5 items-center justify-between lg:justify-center">
        <a className="text-3xl font-bold" href="/">
          <span className="text-blue">&lsaquo;</span>Diogo
          <span className="text-blue">/&rsaquo;</span>
        </a>
        <ul className="gap-5 hidden lg:flex lg:bg-gray lg:p-2 lg:rounded-full">
          {menu.map((item, index) => (
            <li
              className="text-white text-xl font-bold cursor-pointer transition-all duration-200 hover:bg-white hover:text-black hover:rounded-full p-1 px-2"
              key={index}
            >
              <a onClick={() => scrollTo(item.to.substring(1))}>{item.title}</a>
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
