import { List, X } from "phosphor-react";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState();

  const menu = [
    {
      name: "_inicio",
      to: "/",
    },
    {
      name: "_projetos",
      to: "projetos",
    },
    {
      name: "_sobre",
      to: "sobre",
    },
    {
      name: "_contato",
      to: "contato",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl md:text-3xl uppercase MD:m-4 text-red-500"
              >
                &lsaquo;Cheevi/&rsaquo;
              </Link>
            </div>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            {menu.map((item, index) => (
              <NavLink
                className={({ isActive, isPeding }) =>
                  isPeding
                    ? "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500"
                    : isActive
                    ? "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500 border-b-2 border-b-red-500"
                    : "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500"
                }
                to={item.to}
                key={index}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="-mr-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2"
              onClick={toggleMenu}
            >
              <List size={32} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menu.map((item, index) => (
            <NavLink
              className={({ isActive, isPeding }) =>
                isPeding
                  ? "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500"
                  : isActive
                  ? "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500 border-b-2 border-b-red-500"
                  : "font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500"
              }
              to={item.to}
              key={index}
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
