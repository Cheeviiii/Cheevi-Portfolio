import { ProjetosStatus } from "@/components/ProjetosDashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <div className="w-[1350px] mx-[125px]">
      <ProjetosStatus />
    </div>
  );
}
