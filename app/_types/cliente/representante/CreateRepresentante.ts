import { Representate } from "./Representante";

export type CreateRepresentante = Omit<
  Representate,
  "id" | "createdAt" | "updatedAt"
>;
