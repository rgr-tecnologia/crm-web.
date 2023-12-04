import { Representate } from "./Representante";

export type CreateRepresentante = Omit<Representate, "id" | "endereco">;
