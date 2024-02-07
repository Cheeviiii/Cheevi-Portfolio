import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const secretKey = req.headers.get("x-api-key");

  //params
  const searchParams = req.nextUrl.searchParams;
  const published = searchParams.get("published");

  const where = published === "true" ? { published: true } : {};

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const projects = await prisma.project.findMany({
      where,
      orderBy: {
        createdAt: "asc",
      },
    });

    return Response.json(projects);
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const { title, image, description, repository, published, types } = await req.json();

    if (!title || !image || !description) {
      return new Response("Verfique se todas as informações estão preenchidas", { status: 400 });
    }

    const projects = await prisma.project.create({
      data: {
        title: title,
        image: image || "",
        description: description,
        published: published,
        repository: repository,
        types: types,
      },
    });

    return Response.json(projects);
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
