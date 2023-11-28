import { Cliente } from "../_types/Cliente";

export const createCliente = async (data: Omit<Cliente, "id">) => {
  const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

  try {
    const res = await fetch(`${BFF_URL}/clientes`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cliente: Cliente = await res.json();

    if (res.ok) {
      Promise.resolve(cliente);
    } else {
      throw new Error("Erro ao criar cliente");
    }
  } catch (error) {
    if (error instanceof Error) throw Error(error.message);
  }
};
