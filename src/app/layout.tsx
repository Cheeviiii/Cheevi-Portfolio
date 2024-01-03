import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DarkModeProvider, useDarkMode } from "@/context/ThemeProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Diogo S. | Portfolio",
  description: "Portoflio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <DarkModeProvider>
        <body className={roboto.className}>
          {children}
          <Analytics />
        </body>
      </DarkModeProvider>
    </html>
  );
}
