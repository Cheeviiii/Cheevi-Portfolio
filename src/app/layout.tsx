import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { DarkModeProvider } from "@/context/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  preload: true,
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Diogo S. | Portfolio",
  description: "Portoflio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>
        <DarkModeProvider>
          <Toaster />
          {children}
          <Analytics />
        </DarkModeProvider>
      </body>
    </html>
  );
}
