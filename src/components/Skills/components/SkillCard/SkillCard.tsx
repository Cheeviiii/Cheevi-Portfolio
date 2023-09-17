import Image from "next/image";
import * as S from "./styles";

type SkillProps = {
  img: string,
}

export function SkillCard({ img }: SkillProps) {
  return (
    <S.Container>
      <S.Content>
        <Image width={130} src={img} alt="xD"/>
      </S.Content>
    </S.Container>
  );
}
