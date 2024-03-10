import { Cliente } from "./Cliente";

export type CreateCliente = Omit<Cliente, "id" | "createdAt" | "updatedAt">;
