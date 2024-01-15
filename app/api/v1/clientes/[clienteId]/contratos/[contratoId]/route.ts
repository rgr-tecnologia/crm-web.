import { Representate } from "@/app/_types/cliente/representante/Representante";

type Params = {
  clienteId: string;
  contratoId: string;
};

const API_URL = process.env.API_URL;

export async function GET(req: Request, { params }: { params: Params }) {
  const { clienteId, contratoId } = params;
  const res = await fetch(
    `${API_URL}/clientes/${clienteId}/contratos/${contratoId}`
  );
  const data: Representate = await res.json();
  return Response.json(data);
}

export async function PUT(req: Request, { params }: { params: Params }) {
  const { clienteId, contratoId } = params;
  const body = await req.json();

  const res = await fetch(
    `${API_URL}/clientes/${clienteId}/contratos/${contratoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data: Representate = await res.json();
  return Response.json(data);
}
