import { Prospeccao } from "./Prospeccao";

export type CreateProspeccao = Omit<
  Prospeccao,
  "id" | "createdAt" | "updatedAt"
>;
