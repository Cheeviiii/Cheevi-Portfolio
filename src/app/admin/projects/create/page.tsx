import { FormCreateProject } from "@/components/Form";
import { Suspense } from "react";

export default function CreateProject() {
  return (
    <Suspense fallback={"Loading..."}>
      <div className="w-[1250px] mx-[150px]">
        <FormCreateProject />
      </div>
    </Suspense>
  );
}
