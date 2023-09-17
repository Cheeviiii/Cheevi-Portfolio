import Image from "next/image";
import { SkillCard } from "./components/SkillCard";
import * as S from "./style";

import html5 from '../../../public/images/html5.svg'
import js from '../../../public/images/js.svg'
import css3 from '../../../public/images/css-3.svg'
import nodejs from '../../../public/images/nodejs.svg'
import ts from '../../../public/images/typescript.svg'
import mongodb from '../../../public/images/mongodb.svg'

export function Skills() {
  const skills = [html5, css3, js, nodejs, ts, mongodb];

  return (
    <S.Container>
      <S.Title>HABILIDADES</S.Title>
      <S.Content>
        {skills.map((item, index) => (
          <SkillCard key={index} img={item} />
        ))}
      </S.Content>
    </S.Container>
  );
}
