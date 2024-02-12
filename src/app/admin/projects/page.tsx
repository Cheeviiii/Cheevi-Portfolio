import { Suspense } from "react";
import { LoadingSpinner } from "@/components/Loading";
import { ProjetosDashboard } from "@/components/ProjetosDashboard";
import { FormProvider } from "@/context/FormContext";

export default function ProjectsPage() {
  return (
    <div className="w-[90%] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <FormProvider>
          <ProjetosDashboard />
        </FormProvider>
      </Suspense>
    </div>
  );
}
