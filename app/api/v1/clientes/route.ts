import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Cliente } from "@/app/_types/Cliente";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/clientes/`);
    const clientes: Cliente[] = await res.json();

    return Response.json(clientes);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${API_URL}/clientes/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cliente: Cliente = await res.json();

    if (!res.ok) {
      throw Error("Erro ao criar cliente");
    }

    return Response.json(cliente);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
