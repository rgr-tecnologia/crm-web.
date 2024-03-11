import { Cliente } from "@/src/types/cliente/Cliente";
import { Representate } from "@/src/types/cliente/representante/Representante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getRepresentante = async (
  clienteId: Cliente["id"],
  representanteId: Representate["id"]
) => {
  const response = await fetch(
    `${BFF_URL}/clientes/${clienteId}/representantes/${representanteId}`
  );
  const data: Representate = await response.json();
  return data;
};
