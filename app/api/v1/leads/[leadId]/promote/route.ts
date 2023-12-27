import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Cliente } from "@/app/_types/cliente/Cliente";
import { Representate } from "@/app/_types/representante/Representante";

type Params = {
  leadId: string;
};

const API_URL = process.env.API_URL;

export async function POST(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const data = await req.json();
    const res = await fetch(`${API_URL}/leads/${leadId}/promote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resJSON: {
      cliente: Cliente;
      representante: Representate;
    } = await res.json();

    return Response.json(resJSON);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
