import { Metadata } from "next";
import { Sidebar } from "@/components/SideBar";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Diogo S. | Admin",
  description: "Portoflio",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <section className="">
          <Toaster />
          <Sidebar />
          {children}
        </section>
      </body>
    </html>
  );
}
