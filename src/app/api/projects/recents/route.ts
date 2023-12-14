import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const recentsProjects = await prisma.project.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(recentsProjects);
  } catch (error) {
    console.log(error);

    return new Response("Erro interno no servidor", { status: 500 });
  }
}
