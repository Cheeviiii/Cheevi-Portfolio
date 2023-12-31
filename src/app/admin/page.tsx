import { LoadingSpinner } from "@/components/Loading";

import { Suspense } from "react";
import {
  ProjetosRecentes,
  ProjetosStatus,
} from "@/components/ProjetosDashboard";

export default async function Dashboard() {
  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="max-full">
          <ProjetosStatus />
        </div>

        <div className="w-[25%]">
          <ProjetosRecentes />
        </div>
      </Suspense>
    </div>
  );
}
