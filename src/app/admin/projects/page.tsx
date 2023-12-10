import { Projects } from "@/components/ProjetosDashboard";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/Loading";

export default function ProjectsPage() {
  return (
    <div className="w-[1350px] mx-[125px]">
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
    </div>
  );
}
