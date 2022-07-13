import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./pages/Inicio";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Inicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
