import Image from "next/image";

type SkillProps = {
  img: string,
}

export function SkillCard({ img }: SkillProps) {
  return (
    <div className="w-[100px] md:w-[150px] flex items-center flex-col mb-4">
      <Image width={130} src={img} alt="Imagem"/>
    </div>
  );
}
