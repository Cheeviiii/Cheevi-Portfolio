import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const projects = await prisma.project.findMany();
    const secretKey = req.headers.get("x-api-key");

    if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return new Response("Sem autorização", { status: 401 });
    }

    return Response.json(projects);
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  }
}

export async function POST(req: Request) {
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const { title, image, description, repository, published } = await req.json();

    if (!title || !image || !description) {
      return new Response("Verfique se todas as informações estão preenchidas", { status: 400 });
    }

    const projects = await prisma.project.create({
      data: {
        title: title,
        image: image || '',
        description: description,
        published: published,
        repository: repository,
      },
    });

    return Response.json(projects);
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  }
}
