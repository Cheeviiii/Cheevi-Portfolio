import * as S from "./styles";

export function SkillCard({ name, percentage }: any) {
  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Content>
        <S.Percentage>
          <S.PercentageSpan>{percentage}%</S.PercentageSpan>
        </S.Percentage>
        <S.PercentageProgressBox>
          <S.PercentageProgress style={{ width: `${percentage}%` }} />
        </S.PercentageProgressBox>
      </S.Content>
    </S.Container>
  );
}
