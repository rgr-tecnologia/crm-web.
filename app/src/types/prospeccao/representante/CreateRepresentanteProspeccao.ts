import { RepresentanteProspeccao } from "./RepresentanteProspeccao";

export type CreateRepresentante = Omit<
  RepresentanteProspeccao,
  "id" | "createdAt" | "updatedAt"
>;
