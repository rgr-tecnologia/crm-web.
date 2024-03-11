import { Lead } from "@/src/types/lead/Lead";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function getLeadById(id: string) {
  const res = await fetch(`${BFF_URL}/leads/${id}`);
  const lead: Lead = await res.json();

  if (!res.ok) {
    throw Error("Erro ao buscar lead");
  }

  return lead;
}
