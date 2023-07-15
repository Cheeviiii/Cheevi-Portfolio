import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
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

  return (
    <footer className="bg-transparent text-white p-4 top-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} Cheevi</p>
        </div>

        <div className="mt-4 lg:mt-0">
          <div className="flex space-x-4">
            {menu.map((item, index) => (
              <NavLink
                className={({ isActive, isPeding }) =>
                  isPeding
                    ? "font-semibold text-base  text-[#c2c2c2] cursor-pointer hover:text-red-500"
                    : isActive
                    ? "font-semibold text-base  text-[#c2c2c2] cursor-pointer hover:text-red-500 border-b-2 border-b-red-500"
                    : "font-semibold text-base  text-[#c2c2c2] cursor-pointer hover:text-red-500"
                }
                to={item.to}
                key={index}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
