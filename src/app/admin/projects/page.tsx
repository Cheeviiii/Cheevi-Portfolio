
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/Loading";
import { Projects } from "../../../components/ProjetosDashboard";

export default function ProjectsPage() {
  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
    </div>
  );
}
