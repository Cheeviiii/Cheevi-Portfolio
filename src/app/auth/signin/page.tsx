import { FormSignIn } from "@/app/admin/components/Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await getServerSession()

  if (session) {
    redirect('/admin')
  }

  return <FormSignIn />;
}
