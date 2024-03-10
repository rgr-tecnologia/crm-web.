import { Representate } from "@/app/_types/cliente/representante/Representante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getRepresentantesByClienteId = async (clienteId: string) => {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/representantes`);
  const representantes: Representate[] = await res.json();

  return representantes;
};
