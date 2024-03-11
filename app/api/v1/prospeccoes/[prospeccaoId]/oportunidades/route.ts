import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { LeadOportunidade } from "@/src/types/prospeccao/oportunidade/Oportunidade";

type Params = {
  prospeccaoId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId } = params;
    const res = await fetch(
      `${API_URL}/prospeccoes/${prospeccaoId}/oportunidades/`
    );
    const clientes: LeadOportunidade[] = await res.json();

    return Response.json(clientes);
  } catch (error) {
    throw fetchErrorHandler(error);
  }
}

export async function POST(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId } = params;
    const body = await req.json();
    const res = await fetch(
      `${API_URL}/prospeccoes/${prospeccaoId}/oportunidades/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const cliente: LeadOportunidade = await res.json();

    return Response.json(cliente);
  } catch (error) {
    throw fetchErrorHandler(error);
  }
}
