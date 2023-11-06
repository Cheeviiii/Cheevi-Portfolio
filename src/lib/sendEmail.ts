import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default async function sendEmail(e: any) {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_KEY as string
    ).then(() => {
      toast.success("Email enviado com sucesso.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })
    e.target.reset()
  } catch (err) {
    return console.log(err);
  }
};