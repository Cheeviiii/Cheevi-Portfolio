import { Metadata } from "next";
import Sidebar from "../../components/SideBar";

export const metadata: Metadata = {
  title: "Diogo S. | Admin",
  description: "Portoflio",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
}
