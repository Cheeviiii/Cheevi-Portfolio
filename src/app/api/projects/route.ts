import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const projects = await prisma.project.findMany();
    const secretKey = req.headers.get("x-api-key");

    if (!secretKey || secretKey !== process.env.API_KEY) {
      throw new Error("Sem autorização");
    }

    return Response.json(projects);
  } catch (error: any) {
    console.error(error.message);
    return Response.json({ error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const { title, image, description, repository, publised } = await req.json();

    if (!title || !image || !description) {
      throw new Error("Faltando coisa ai...");
    }

    const secretKey = req.headers.get("x-api-key");

    if (!secretKey || secretKey !== process.env.API_KEY) {
      return Response.json({ message: "Opa parça, precisa de autorização para passar daqui!" });
    }

    const projects = await prisma.project.create({
      data: {
        title: title,
        image: image,
        description: description,
        publised: publised,
        repository: repository,
      },
    });

    return Response.json(projects);
  } catch (error: any) {
    console.error(error);
    return new Response(error, {
      status: 404,
    });
  }
}
