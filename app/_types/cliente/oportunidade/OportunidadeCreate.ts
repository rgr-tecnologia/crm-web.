import { Oportunidade } from "./Oportunidade";

export type OportunidadeCreate = Omit<
  Oportunidade,
  "id" | "createdAt" | "updatedAt"
>;
