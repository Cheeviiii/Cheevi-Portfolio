import { LoadingSpinner } from "@/components/Loading";

import { Suspense } from "react";
import { Last3Projects, ProjetosStatus } from "./components/ProjetosDashboard";
import Link from "next/link";

export default async function Dashboard() {
  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <div>
          <ProjetosStatus />

          <div className="w-full h-[500px] text-center flex justify-between">
            <div className="container mt-[150px]">
              <div className="h-full flex flex-col gap-5 items-start justify-center">
                <h1 className="text-2xl font-bold uppercase">Últimos projetos</h1>

                <Last3Projects />
                <Link
                  className="mx-[85px] px-5 p-2 bg-blue-300 uppercase rounded-2xl text-white text-xl font-medium transition-colors hover:bg-blue-dark"
                  href={"/admin/projects"}
                >
                  Ver todos
                </Link>
              </div>
            </div>

            <div className="container"></div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
