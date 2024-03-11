import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Contrato } from "@/src/types/contrato/Contrato";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/contratos/`);
    const clientes: Contrato[] = await res.json();

    return Response.json(clientes);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
