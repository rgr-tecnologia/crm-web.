import { LeadOportunidadeCreate } from "@/app/_types/prospeccao/oportunidade/OportunidadeCreate";
import { CreateRepresentante } from "@/app/_types/cliente/representante/CreateRepresentante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function promoteLead(
  id: string,
  representante: CreateRepresentante,
  oportunidade: LeadOportunidadeCreate
) {
  return fetch(`${BFF_URL}/leads/${id}/promote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ representante, oportunidade }),
  });
}
