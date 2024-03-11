import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Cliente } from "@/src/types/cliente/Cliente";
import { Representate } from "@/src/types/cliente/representante/Representante";

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

    if (res.ok) {
      const { cliente, representante } = (await res.json()) as {
        cliente: Cliente;
        representante: Representate;
      };
      return {
        status: 200,
        body: {
          cliente,
          representante,
        },
      };
    }

    throw new Error("Erro ao promover lead");
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
