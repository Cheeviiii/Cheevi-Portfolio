import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TodosProjetos } from "./pages/Projetos";
import { Inicio } from "./pages/Inicio";
import { ProjectView } from "./pages/ProjectView";
import { NavBar } from "./components/Navbar";
import { Contato } from "./pages/contato";
import { Footer } from './components/Footer'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route
          path="/projetos"
          element={<TodosProjetos />}
        />
        <Route
          path="/projeto/:slug"
          element={<ProjectView />}
        />
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      <Footer/>
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
