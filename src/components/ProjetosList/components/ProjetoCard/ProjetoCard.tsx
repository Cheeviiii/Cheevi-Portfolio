import * as S from "./style";

type ProjetoProps = {
  title: string;
  img: string;
  description: string;
  github: string;
};

export function ProjetoCard({ title, img, description, github }: ProjetoProps) {
  return (
    <S.Container>
      <S.Box>
        <S.Img src={img} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Paragrafo>{description}</S.Paragrafo>

        <S.LinkBox>
          <S.Link href={github} target="_blank">
            Github
          </S.Link>
        </S.LinkBox>
      </S.Box>
    </S.Container>
  );
}
