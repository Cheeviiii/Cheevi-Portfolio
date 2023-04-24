import { animateScroll as scroll } from "react-scroll";

import { Popover, Transition } from "@headlessui/react";

import { Link } from "react-scroll";
import { List, X } from "phosphor-react";
import { Fragment } from "react";

const menu = [
  {
    name: "Projetos",
    to: "projetos",
  },
  {
    name: "Sobre",
    to: "sobre",
  },
  {
    name: "Skills",
    to: "skills",
  },
  {
    name: "Contato",
    to: "contato",
  },
];

export function Header() {
  return (
    <Popover className="relative">
      <nav className="md:fixed w-full p-5 flex items-center justify-between md:justify-around">
        <div className="hidden bg-[#1b1b1b] p-3 rounded-3xl items-center md:flex">
          <p className="btn-header" onClick={() => scroll.scrollToTop()}>
            Inicio
          </p>
          {menu.map((item) => (
            <Link
              activeClass="active-link"
              className="btn-header"
              to={item.to}
              smooth={true}
              duration={500}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="-mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center focus:outline-none">
            <span className="sr-only">Open Menu</span>
            <List size={32} />
          </Popover.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transtion trasnform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-black ring-opacity-5 bg-[#1b1b1b] divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center focus:outline-none">
                      <span className="sr-only">Close Button</span>
                      <X size={32} />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-6">
                    <p
                      className="btn-header"
                      onClick={() => scroll.scrollToTop()}
                    ></p>
                    {menu.map((item) => (
                      <Link
                        activeClass="active-link"
                        className="btn-header"
                        to={item.to}
                        smooth={true}
                        duration={500}
                      >
                        <span className="text-blue-500 p-1">/</span>
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </nav>
    </Popover>
  );
}
