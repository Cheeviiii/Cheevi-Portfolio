import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { Inicio } from "./pages/Inicio";
import { ProjectView } from "./pages/ProjectView";
import { ProjetosData } from "./service/data";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route
          path="/projetos"
          exact
          element={<Projects data={ProjetosData} />}
        />
        <Route
          path="/projeto/:slug"
          element={<ProjectView data={ProjetosData} />}
        />
      </Routes>
      <Footer />
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
