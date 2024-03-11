import { Representate } from "@/src/types/cliente/representante/Representante";

const API_URL = process.env.API_URL;

type Params = {
  clienteId: string;
  representanteId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  const { clienteId, representanteId } = params;
  const res = await fetch(
    `${API_URL}/clientes/${clienteId}/representantes/${representanteId}`
  );
  const representante: Representate = await res.json();

  return Response.json(representante);
}

export async function PUT(req: Request, { params }: { params: Params }) {
  const { clienteId, representanteId } = params;

  const body = await req.json();
  const res = await fetch(
    `${API_URL}/clientes/${clienteId}/representantes/${representanteId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const drepresentanteata: Representate = await res.json();

  return Response.json(drepresentanteata);
}
