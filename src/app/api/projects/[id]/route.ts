import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const project = await prisma.project.findMany({
      where: {
        id: id,
      },
    });

    return Response.json(project);
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    await prisma.project.delete({ where: { id: id } });

    return Response.json({ message: "Projeto deletado com sucesso" });
  } catch (error) {}
}
