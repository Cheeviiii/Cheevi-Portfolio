/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser, HiClipboard } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import DarkModeSwitch from "../DarkModeSwitch";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuLink = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <HiUser size={32} />,
    },
    {
      name: "Projetos",
      href: "/admin/projects",
      icon: <HiClipboard size={32} />,
    },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } hidden lg:block h-screen dark:bg-gray-400 border-r border-gray-300 relative duration-700 transition-all`}
    >
      <button
        className={`absolute rounded-full -right-3 top-9 w-7 border-2 bg-gray-400  border-white text-white  transition-all duration-700 hover:scale-110 ${
          open ? "rotate-180 " : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center my-5">
        <img
          className={`duration-700 ${
            open ? "scale-100" : "scale-50"
          } w-32 border border-gray-300 rounded-full font-bold uppercase text-white shadow-2xl`}
          src="https://i.pinimg.com/originals/16/ab/c1/16abc1944e3b8971a7313aad627433af.jpg"
          alt="Image"
        />

        <div className="mt-5">
          <DarkModeSwitch />
        </div>

        <div className="w-[100%] flex items-center justify-center my-10">
          <ul className="w-full flex flex-col gap-5 p-2">
            {menuLink.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`${
                  pathname === item.href ? "bg-blue-300" : ""
                } flex items-center gap-2 p-2 transition-colors text-black dark:text-white hover:bg-blue-300 rounded-2xl cursor-pointer`}
              >
                <div className="p-2 rounded-full">{item.icon}</div>
                <li
                  className={`ease-in-out ${
                    open ? "duration-700 scale-100" : "duration-300 scale-0"
                  } text-2xl font-medium`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          <Link
            className={`absolute duration-700 ${
              open ? " w-32" : " w-16"
            } flex items-center gap-2 bottom-0 my-2 p-2 transition-all dark:text-white hover:bg-blue-300 rounded-2xl cursor-pointer`}
            href="/api/auth/signout"
          >
            <div className="p-2">
              <ImExit size={32} />
            </div>
            <p
              className={`ease-in-out ${
                open ? "duration-700 scale-100" : "duration-300 scale-0"
              }  text-2xl font-medium`}
            >
              Sair
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
