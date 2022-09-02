import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./pages/Inicio";
import { ProjectView } from "./pages/ProjectView";
import { ProjetosMap } from "./service/data";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/projeto/:slug" element={<ProjectView data={ProjetosMap} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
