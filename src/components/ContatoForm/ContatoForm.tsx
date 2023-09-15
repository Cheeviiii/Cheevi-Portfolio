"use client"

import { ToastContainer } from "react-toastify";
import sendEmail from "./function/sendEmail";
import * as S from "./styles";

export function ContatoForm() {
  return (
    <S.Container>
      <ToastContainer />
      <S.Title>CONTATO</S.Title>
      <S.Form onSubmit={sendEmail}>
        <S.NomeEmail>
          <S.Label>
            Nome <S.Input type="text" name="user_name" required />
          </S.Label>

          <S.Label>
            Email
            <S.Input type="email" name="user_email" required />
          </S.Label>
        </S.NomeEmail>

        <S.Sobre>
          <S.Label>
            Sobre
            <S.InputSobre type="text" name="user_sobre" required />
          </S.Label>
        </S.Sobre>

        <S.Assunto>
          <S.Label>
            Assunto
            <S.Textarea name="message" required />
          </S.Label>
        </S.Assunto>

        <S.Button>Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
}
