import { SkillCard } from "./components/SkillCard";
import * as S from "./style";

export function Skills() {
  const skills = [
    { name: "HTML", percentage: 75 },
    { name: "CSS", percentage: 70 },
    { name: "JavaScript", percentage: 80 },
    { name: "Node.Js", percentage: 85 },
  ];

  return (
    <S.Container>
      <S.Title>HABILIDADES</S.Title>
      <S.Content>
        {skills.map((item, index) => (
          <SkillCard
            key={index}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
