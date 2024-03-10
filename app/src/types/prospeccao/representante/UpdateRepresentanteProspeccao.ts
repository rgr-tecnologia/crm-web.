import { RepresentanteProspeccao } from "./RepresentanteProspeccao";

export type UpdateRepresentante = Omit<
  RepresentanteProspeccao,
  "id" | "endereco"
>;
