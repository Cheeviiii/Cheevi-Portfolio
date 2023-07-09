import { animateScroll as scroll } from "react-scroll";

import { Popover, Transition } from "@headlessui/react";

/* import { Link } from "react-scroll"; */
import { List, X } from "phosphor-react";
import { Fragment } from "react";

import { Link } from "react-router-dom";

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
];

export const NavBar = () => {
  return (
    <Popover className="relative block">
      <nav className="md:fixed w-full p-5 flex bg-[#0e0e0e] border-b border-[#363636] items-center justify-between md:justify-between">
        <div>
          <Link to="/" className="text-3xl uppercase m-4 text-red-500">
            &lsaquo;Cheevi/&rsaquo;
          </Link>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {menu.map((item) => (
            <Link
              className="font-semibold text-lg  text-[#c2c2c2] cursor-pointer hover:text-red-500"
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <Link
            to="contato"
            className="font-semibold text-lg text-[#c2c2c2] cursor-pointer hover:text-red-500"
          >
            _contact-me
          </Link>
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
                        key={item.name}
                      >
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
};
