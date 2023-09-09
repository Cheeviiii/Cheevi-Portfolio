"use client"

import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio | Inicio",
  description: "Portoflio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
