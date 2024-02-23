import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DarkModeProvider } from "@/context/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import TopScrollAutomator from "@/components/TopScrollAutomator";
import { ScrollProvider } from "@/context/ScrollContext";

const Fonte = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diogo S. | Portfolio",
  description: "Portoflio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={Fonte.className}>
      <body>
        <DarkModeProvider>
          <Toaster />
          <TopScrollAutomator>
            <ScrollProvider>{children}</ScrollProvider>
          </TopScrollAutomator>
          <Analytics />
        </DarkModeProvider>
      </body>
    </html>
  );
}
