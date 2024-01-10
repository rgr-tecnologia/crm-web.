import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { LeadOportunidade } from "@/app/_types/lead/oportunidade/Oportunidade";

type Params = {
  leadId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const res = await fetch(`${API_URL}/leads/${leadId}/oportunidades/`);
    const clientes: LeadOportunidade[] = await res.json();

    return Response.json(clientes);
  } catch (error) {
    throw fetchErrorHandler(error);
  }
}

export async function POST(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const body = await req.json();
    const res = await fetch(`${API_URL}/leads/${leadId}/oportunidades/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const cliente: LeadOportunidade = await res.json();

    return Response.json(cliente);
  } catch (error) {
    throw fetchErrorHandler(error);
  }
}
