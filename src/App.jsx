import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TodosProjetos } from "./pages/Projetos";
import { Inicio } from "./pages/Inicio";
import { ProjectView } from "./pages/ProjectView";
import { ProjetosData } from "./service/data";
import { NavBar } from "./components/Navbar";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route
          path="/projetos"
          exact
          element={<TodosProjetos />}
        />
        <Route
          path="/projeto/:slug"
          element={<ProjectView data={ProjetosData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
