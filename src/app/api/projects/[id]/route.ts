import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: id,
      },
    });

    return Response.json(project);
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const { title, image, description, repository, published, types } = await req.json();
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    const updatedUser = await prisma.project.update({
      where: { id: id },
      data: {
        title: title,
        image: image,
        description: description,
        repository: repository,
        types: types,
        published: published,
      },
    });

    return Response.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const secretKey = req.headers.get("x-api-key");

  if (!secretKey || secretKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Sem autorização", { status: 401 });
  }

  try {
    await prisma.project.delete({ where: { id: id } });

    return Response.json({ message: "Projeto deletado com sucesso" });
  } catch (error) {
    console.error(error);
    return new Response("Erro interno do servidor", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
}
