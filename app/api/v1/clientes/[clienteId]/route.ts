import { Cliente } from "@/app/_types/cliente/Cliente";

type Params = {
  clienteId: string;
};

const API_URL = process.env.API_URL;

export const revalidade = 1;

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { clienteId } = params;
    const res = await fetch(`${API_URL}/clientes/${clienteId}`);

    const cliente: Cliente = await res.json();

    return Response.json(cliente);
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

export async function PUT(req: Request, { params }: { params: Params }) {
  const { clienteId } = params;

  const data = await req.json();

  const res = await fetch(`${API_URL}/clientes/${clienteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const cliente: Cliente = await res.json();
    return Response.json(cliente);
  } else {
    throw Error("Falha ao atualizar o cliente");
  }
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    const { clienteId } = params;

    const res = await fetch(`${API_URL}/clientes/${clienteId}`, {
      method: "DELETE",
    });
    return Response.json({ message: "Cliente deletado com sucesso!" });
  } catch (error) {
    return Response.json(
      { error: "Não foi possível deletar o cliente" },
      {
        status: 500,
      }
    );
  }
}
