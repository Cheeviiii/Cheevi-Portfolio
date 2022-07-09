import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="bg-[#141414] h-28 border-b-4 border-b-[#303030] w-full p-5 flex  items-center justify-around">
      <h1 className="font-bold text-3xl uppercase text-yellow-500">
        &lsaquo;Cheevi/&rsaquo;
      </h1>

      <div className="flex items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "btn-header"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "btn-header"
          }
          to="/projetos"
        >
          Projetos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "btn-header"
          }
          to="/sobre"
        >
          Sobre
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "btn-header"
          }
          to="/contato"
        >
          Contato
        </NavLink>
      </div>
    </nav>
  );
}
