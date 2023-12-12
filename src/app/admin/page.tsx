import { LoadingSpinner } from "@/components/Loading";

import { Suspense } from "react";
import { ProjetosStatus } from "./components/ProjetosDashboard";

export default async function Dashboard() {
  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <div>
          <ProjetosStatus />

          <div className="w-full h-[500px] text-center flex justify-between">
            <div className="container">
              <div className="h-full flex items-center justify-center">
                <h1 className="text-3xl font-bold">Ultimos projetos</h1>
              </div>
            </div>

            <div className="container">test</div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
