import { LeadOportunidadeCreate } from "@/src/types/prospeccao/oportunidade/OportunidadeCreate";
import { CreateRepresentante } from "@/src/types/cliente/representante/CreateRepresentante";

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
