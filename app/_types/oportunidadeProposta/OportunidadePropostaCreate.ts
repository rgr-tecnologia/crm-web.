import { OportunidadeProposta } from "./OportunidadeProposta";

export type OportunidadePropostaCreate = Omit<
  OportunidadeProposta,
  "id" | "createdAt" | "updatedAt"
>;
