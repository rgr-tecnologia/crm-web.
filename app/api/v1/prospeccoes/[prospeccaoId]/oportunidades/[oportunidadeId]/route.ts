import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";

type Params = {
  prospeccaoId: string;
  oportunidadeId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId, oportunidadeId } = params;
    const res = await fetch(
      `${API_URL}/prospeccoes/${prospeccaoId}/oportunidades/${oportunidadeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resJSON = await res.json();
    return Response.json(resJSON);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}

export async function PUT(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId, oportunidadeId } = params;
    const body = await req.json();

    const res = await fetch(
      `${API_URL}/prospeccoes/${prospeccaoId}/oportunidades/${oportunidadeId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (res.ok) {
      return Response.json(await res.json());
    } else {
      throw new Error("Erro ao atualizar oportunidade");
    }
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
