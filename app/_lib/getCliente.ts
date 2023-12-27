import { Cliente } from "../_types/cliente/Cliente";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getCliente = async (clienteId: string) => {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}`);
  const cliente: Cliente = await res.json();

  return cliente;
};
