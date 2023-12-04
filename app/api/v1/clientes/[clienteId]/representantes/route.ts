import { Representate } from "@/app/_types/representante/Representante";

const API_URL = process.env.API_URL;

type Params = {
  clienteId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  const { clienteId } = params;
  const res = await fetch(`${API_URL}/clientes/${clienteId}/representantes`);
  const representantes: Representate[] = await res.json();

  return Response.json(representantes);
}

export async function POST(req: Request, { params }: { params: Params }) {
  const { clienteId } = params;
  const body = await req.json();
  const res = await fetch(`${API_URL}/clientes/${clienteId}/representantes`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const representante: Representate = await res.json();

  return Response.json(representante);
}
