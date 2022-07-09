import { animateScroll as scroll } from "react-scroll";

import { Link } from "react-scroll";

export function Header() {
  return (
    <div className="fixed w-full">
      <nav className="bg-[#141414] h-28 border-b-4 border-b-[#303030] w-full p-5 flex items-center justify-around">
        <h1 className="font-bold text-3xl uppercase text-yellow-500">
          &lsaquo;Cheevi/&rsaquo;
        </h1>

        <div className="flex items-center">
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
        </div>
      </nav>
    </div>
  );
}
