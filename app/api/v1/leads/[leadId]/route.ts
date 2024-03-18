import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Lead } from "@/src/types/Lead";

const API_URL = process.env.API_URL;

type Params = {
  leadId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const res = await fetch(`${API_URL}/leads/${leadId}`);

    const lead: Lead = await res.json();

    return Response.json(lead);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}

export async function PUT(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const data = await req.json();

    const res = await fetch(`${API_URL}/leads/${leadId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Erro ao atualizar lead");
    }

    const lead: Lead = await res.json();

    return Response.json(lead);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
