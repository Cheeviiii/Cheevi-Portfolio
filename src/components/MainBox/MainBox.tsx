import * as S from "./styles";

export function MainBox() {
  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <S.Imagem
            src="https://i.pinimg.com/564x/d6/f4/e2/d6f4e26762f50b0b4576d32c82ba6242.jpg"
            alt="Profile"
          />

          <S.H1>
            Hi, {"i'm"} <S.Span>&lsaquo;</S.Span>Cheevi
            <S.Span> /&rsaquo;</S.Span>
          </S.H1>
        </S.Box>
      </S.Content>
    </S.Container>
  );
}
