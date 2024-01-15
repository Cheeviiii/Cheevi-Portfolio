import { Metadata } from "next";
import { Sidebar } from "@/components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export const metadata: Metadata = {
  title: "Diogo S. | Admin",
  description: "Portoflio",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <section className="max-w-screen flex">
          <ToastContainer />
          <Sidebar />
          {children}
        </section>
      </body>
    </html>
  );
}
