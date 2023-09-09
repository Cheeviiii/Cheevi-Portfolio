import * as S from "./styles";

export function Contato() {
  return (
    <S.Container>
      <S.Title>CONTATO</S.Title>
      <S.Form>
        <S.NomeEmail>
          <S.Label>
            Nome <S.Input type="text" />
          </S.Label>

          <S.Label>
            Email
            <S.Input type="email" />
          </S.Label>
        </S.NomeEmail>

        <S.Sobre>
          <S.Label>
            Sobre
            <S.Input type="text" />
          </S.Label>
        </S.Sobre>

        <S.Assunto>
          <S.Label>Assunto
            <S.Textarea />
          </S.Label>
        </S.Assunto>
      </S.Form>
    </S.Container>
  );
}
