import { Cliente } from "@/app/_types/cliente/Cliente";
import { CreateCliente } from "@/app/_types/cliente/CreateCliente";
import { LeadOportunidade } from "@/app/_types/lead/oportunidade/Oportunidade";
import { CreateRepresentante } from "@/app/_types/representante/CreateRepresentante";
import { Representate } from "@/app/_types/representante/Representante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function promoteLead(
  id: string,
  cliente: CreateCliente,
  representante: CreateRepresentante
) {
  const res = await fetch(`${BFF_URL}/leads/${id}/promote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cliente, representante }),
  });

  const resJSON: {
    cliente: Cliente;
    representante: Representate;
    oportunidade: LeadOportunidade;
  } = await res.json();

  return resJSON;
}
