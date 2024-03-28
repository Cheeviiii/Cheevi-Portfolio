/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoBookOutline, IoDocumentTextOutline, IoFlashOutline } from "react-icons/io5";
import DarkModeSwitch from "../DarkModeSwitch";
import { Separator } from "../ui/separator";

export function Sidebar() {
  const pathname = usePathname();

  const menuLink = [
    {
      name: "Inicio",
      href: "/admin",
      icon: <IoHomeOutline size={24} />,
    },
    {
      name: "Projetos",
      href: "/admin/projects",
      icon: <IoBookOutline size={24} />,
    },
    {
      name: "Contatos",
      href: "/admin/contacts",
      icon: <IoDocumentTextOutline size={24} />,
    },
  ];

  return (
    <div className="w-full border-b border-b-gray-300 p-7 flex justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <IoFlashOutline size={42} />
          <h1 className="text-2xl font-bold">Cheevi</h1>
        </div>
        <Separator orientation="vertical" />
        <ul className="flex gap-3">
          {menuLink.map((item: any, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-1 ${
                pathname === item.href ? "text-black dark:text-white font-bold" : "text-gray-300 dark:text-gray-200"
              }`}
            >
              <div>{item.icon}</div>
              <li className="text-lg">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <div className="border border-gray-300 flex items-center p-2 rounded">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
}
