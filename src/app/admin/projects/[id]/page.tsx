import { FormEditProject } from "@/components/Form";

export default function ProjectEdit({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="w-[1250px] mx-[150px]">
      <FormEditProject id={id} />
    </div>
  );
}
