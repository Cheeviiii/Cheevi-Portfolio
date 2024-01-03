"use client";

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeModeContext = createContext<ThemeContextProps | undefined>(undefined);

export const DarkModeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Carregar o estado DarkMode no LocalStorage ao montar o component
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      document.documentElement.classList.toggle('dark', darkMode);
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return <ThemeModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeModeContext.Provider>;
};

export const useDarkMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("Erro ao usar darkMode");
  }

  return context;
};
