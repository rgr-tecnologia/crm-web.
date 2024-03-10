import { LeadOportunidade } from "./Oportunidade";

export type LeadOportunidadeCreate = Omit<
  LeadOportunidade,
  "id" | "createdAt" | "updatedAt"
>;
