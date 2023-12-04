import { Representate } from "./Representante";

export type UpdateRepresentante = Omit<Representate, "id" | "endereco">;
