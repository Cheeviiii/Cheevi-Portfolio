import * as S from "./styles";

export function MainBox() {
  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <S.Imagem
            src="https://pnganime.com/web/images/l/luffy-gear-5-colored.png"
            alt="Profile"
          />

          <S.Title>
            <S.H1>
              Hi, {"i'm"} <S.Span>&lsaquo;</S.Span>Cheevi
              <S.Span> /&rsaquo;</S.Span>
            </S.H1>

            <S.P>
              Tenho como objetivo crescer como profissional competente e
              dedicado, estudando e inovando.
            </S.P>
          </S.Title>
        </S.Box>
      </S.Content>
    </S.Container>
  );
}
