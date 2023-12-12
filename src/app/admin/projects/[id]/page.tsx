import { FormEditProject } from "@/app/admin/components/Form";
import { LoadingSpinner } from "@/components/Loading";
import { Suspense } from "react";

export default function ProjectEdit({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="w-[1350px] mx-auto">
      <Suspense fallback={<LoadingSpinner />}>
        <FormEditProject id={id} />
      </Suspense>
    </div>
  );
}
