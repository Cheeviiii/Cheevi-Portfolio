import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  return (
    <div className="flex flex-col m-5">
      <h1 className="text-7xl px-10">
        Usuário: <b>{session?.user?.name}</b>
      </h1>
    </div>
  );
}
