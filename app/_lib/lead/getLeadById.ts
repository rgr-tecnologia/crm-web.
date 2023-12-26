import { fetchErrorHandler } from "../errors/fetchErrorHandler";

const BFF_URL = process.env.BFF_URL;

export async function getLeadById(id: string) {
  const res = await fetch(`${BFF_URL}/leads/${id}`);
  const lead = await res.json();

  if (!res.ok) {
    throw Error("Erro ao buscar lead");
  }

  return lead;
}
