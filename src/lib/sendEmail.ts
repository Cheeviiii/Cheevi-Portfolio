import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastError, ToastSuccess } from "./Toast";

export default async function sendEmail(e: any) {
  e.preventDefault();

  try {
    await emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string, e.target, process.env.NEXT_PUBLIC_EMAILJS_KEY as string)
      .then(() => {
        ToastSuccess("Email enviado com sucesso.");
      });
    e.target.reset();
  } catch (err) {
    console.log(err);
    ToastError("Ocorreu um erro, tente novamente.");
  }
}
