import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(contacts);
  } catch (error) {}
}

export async function POST(req: Request) {
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const { name, email, content } = await req.json();

    const contact = await prisma.contact.create({
      data: {
        name: name,
        email: email,
        content: content,
      },
    });

    return Response.json(contact);
  } catch (error) {
    console.log(error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
