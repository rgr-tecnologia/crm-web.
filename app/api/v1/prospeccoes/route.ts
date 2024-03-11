import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/prospeccoes`);
    const prospeccoes: Prospeccao[] = await res.json();

    if (!res.ok) {
      throw Error("Erro ao buscar prospecções");
    }
    return Response.json(prospeccoes);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${API_URL}/prospeccoes`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const lead: Prospeccao = await res.json();

    if (!res.ok) {
      throw Error("Erro ao criar prospecção");
    }

    return Response.json(lead);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
