import { LoadingSpinner } from "@/components/Loading";
import { ProjetosStatus } from "@/components/ProjetosDashboard";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <ProjetosStatus />
      </Suspense>
    </div>
  );
}
