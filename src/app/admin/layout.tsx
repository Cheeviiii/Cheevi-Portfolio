import { Metadata } from "next";
import Sidebar from "../../components/SideBar";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Diogo S. | Admin",
  description: "Portoflio",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <section className="flex">
      <ToastContainer />
      <Sidebar />
      {children}
    </section>
  );
}
