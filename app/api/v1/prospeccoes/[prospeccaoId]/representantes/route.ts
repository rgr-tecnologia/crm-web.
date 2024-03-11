import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { RepresentanteProspeccao } from "@/src/types/prospeccao/representante/RepresentanteProspeccao";

const API_URL = process.env.API_URL;

type Params = {
  prospeccaoId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId } = params;
    const res = await fetch(
      `${API_URL}/prospeccoes/${prospeccaoId}/representantes`
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar representantes");
    }
    const representantes: RepresentanteProspeccao[] = await res.json();
    return Response.json(representantes);
  } catch (err) {
    fetchErrorHandler(err);
  }
}

export async function POST(req: Request, { params }: { params: Params }) {
  const { prospeccaoId } = params;
  const body = await req.json();
  const res = await fetch(
    `${API_URL}/prospeccoes/${prospeccaoId}/representantes`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const representante: RepresentanteProspeccao = await res.json();

  return Response.json(representante);
}
