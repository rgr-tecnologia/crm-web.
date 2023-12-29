import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";

type Params = {
  clienteId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { clienteId } = params;
    const res = await fetch(`${API_URL}/clientes/${clienteId}/oportunidades`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJSON = await res.json();
    return Response.json(resJSON);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
