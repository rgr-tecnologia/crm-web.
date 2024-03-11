import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";

type Params = {
  prospeccaoId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { prospeccaoId } = params;
    const url = `${API_URL}/prospeccoes/${prospeccaoId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    fetchErrorHandler(error);
  }
}
