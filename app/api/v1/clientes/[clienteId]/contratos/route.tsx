import { Contrato } from "@/app/_types/Contrato";

const API_URL = process.env.API_URL;

type Params = {
  clienteId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { clienteId } = params;
    const res = await fetch(`${API_URL}/clientes/${clienteId}/contratos`);

    const contratos: Contrato[] = await res.json();

    return Response.json(contratos);
  } catch (error) {
    if (error instanceof Error)
      return Response.json(
        { error: error.message },
        {
          status: 500,
        }
      );
  }
}

export async function POST(req: Request, { params }: { params: Params }) {
  try {
    const { clienteId } = params;
    const body = await req.json();
    const res = await fetch(`${API_URL}/clientes/${clienteId}/contratos`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const contrato: Contrato = await res.json();

    return Response.json(contrato);
  } catch (error) {
    if (error instanceof Error)
      return Response.json(
        { error: error.message },
        {
          status: 500,
        }
      );
  }
}
