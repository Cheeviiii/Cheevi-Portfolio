/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser, HiClipboard } from "react-icons/hi2";
import DarkModeSwitch from "../DarkModeSwitch";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={`${open ? "w-72" : "w-20"} hidden lg:block h-screen bg-gray-400 border-r border-gray-300 relative duration-700 transition-all`}>
      <button
        className={`absolute rounded-full -right-3 top-9 w-7 border-2 bg-gray-400  border-white text-white  transition-all duration-700 hover:scale-110 ${
          open ? "rotate-180 " : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center my-5">
        <img
          className={`duration-700 ${
            open ? "translate-x-0" : "-translate-x-96"
          } w-32 border border-gray-300 rounded-full font-bold uppercase text-white shadow-2xl`}
          src="https://i.pinimg.com/originals/16/ab/c1/16abc1944e3b8971a7313aad627433af.jpg"
          alt="Image"
        />

        <DarkModeSwitch />

        <div className="flex items-center justify-center my-10">
          <ul className="flex flex-col gap-5">
            <Link
              href={"/admin"}
              className={`${
                pathname === "/admin" ? "bg-blue-300" : ""
              } flex items-center gap-2 p-2 transition-colors text-white hover:bg-blue-300 rounded-2xl cursor-pointer`}
            >
              <div className="p-2 rounded-full">
                <HiUser size={32} />
              </div>
              <li className={`${open ? "scale-100" : "scale-50 hidden"} text-2xl font-medium`}>Dashboard</li>
            </Link>

            <Link
              href={"/admin/projects"}
              className={`${
                pathname === "/admin/projects" ? "bg-blue-300" : ""
              } flex items-center gap-2 p-2 transition-colors  text-white hover:bg-blue-300 rounded-2xl cursor-pointer`}
            >
              <div className="p-2 rounded-full">
                <HiClipboard size={32} />
              </div>
              <li className={`${open ? "" : "hidden"} text-2xl font-medium`}>Projetos</li>
            </Link>
          </ul>

          <a
            className="absolute flex items-center gap-2 bottom-0 my-2 p-2 transition-colors text-white hover:bg-blue rounded-2xl cursor-pointer"
            href="/api/auth/signout"
          >
            <div className="p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
            <p className={`${open ? "" : "hidden"} text-2xl font-medium`}>SIGN OUT</p>
          </a>
        </div>
      </div>
    </div>
  );
}
