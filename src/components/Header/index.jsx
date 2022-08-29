import { animateScroll as scroll } from "react-scroll";

import { Popover, Transition } from "@headlessui/react";

import { Link } from "react-scroll";
import { List, X } from "phosphor-react";
import { Fragment } from "react";

export function Header() {
  return (
    <Popover className="relative">
      <nav className="bg-[#141414] h-28 border-b-4 border-b-[#303030] w-full p-5 flex items-center justify-between md:justify-around">
        <h1 className="font-bold text-3xl uppercase text-yellow-500">
          &lsaquo;Cheevi/&rsaquo;
        </h1>

        <div className="hidden items-center md:flex">
          <p className="btn-header" onClick={() => scroll.scrollToTop()}>
            Home
          </p>
          <Link
            activeClass="active-link"
            className="btn-header"
            to="sobre"
            smooth={true}
            duration={500}
          >
            Sobre
          </Link>
          <Link className="btn-header" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link
            className="btn-header"
            to="projetos"
            smooth={true}
            duration={500}
          >
            Projetos
          </Link>
          <Link
            className="btn-header"
            to="contato"
            smooth={true}
            duration={500}
          >
            Contato
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
            <div className="rounded-lg shadow-lg ring-black ring-opacity-5 bg-[#141414] divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-bold text-3xl uppercase text-yellow-500">
                      &lsaquo;Cheevi/&rsaquo;
                    </h1>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center focus:outline-none">
                      <span className="sr-only">Close Button</span>
                      <X size={32} />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-6">
                    <Link className="btn-header">Home</Link>
                    <Link
                      activeClass="active-link"
                      className="btn-header"
                      to="sobre"
                      smooth={true}
                      duration={500}
                    >
                      Sobre
                    </Link>
                    <Link
                      activeClass="active-link"
                      className="btn-header"
                      to="skills"
                      smooth={true}
                      duration={500}
                    >
                      Skills
                    </Link>
                    <Link
                      className="btn-header"
                      to="projetos"
                      smooth={true}
                      duration={500}
                    >
                      Projetos
                    </Link>
                    <Link className="btn-header" to="contato">
                      Contato
                    </Link>
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
