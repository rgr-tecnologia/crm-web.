import { Cliente } from "../../../_types/cliente/Cliente";
import { CreateCliente } from "../../../_types/cliente/CreateCliente";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const updateCliente = async (id: string, data: CreateCliente) => {
  try {
    const res = await fetch(`${BFF_URL}/clientes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cliente: Cliente = await res.json();

    if (res.ok) {
      Promise.resolve(cliente);
    } else {
      throw new Error("Erro ao atualizar cliente");
    }
  } catch (error) {
    if (error instanceof Error) throw Error(error.message);
  }
};
