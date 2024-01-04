"use client";
import { ThemeProvider } from "next-themes";

export function DarkModeProvider({ children }: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
