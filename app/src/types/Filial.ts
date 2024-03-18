import { z } from "zod";
import { mobilePhoneSchema } from "../zod/mobilePhoneSchema";
import { cnpjSchema } from "../zod/cnpjSchema";
import { FilialEnderecoCreateSchema } from "./FilialEndereco";

export const FiliaSchema = z.object({
  id: z.string().uuid(),
  clienteId: z.string().uuid(),
  telefone: mobilePhoneSchema,
  filialEndereco: FilialEnderecoCreateSchema,
  nome: z.string(),
  cnpj: cnpjSchema,
  ativo: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const FilialCreateSchema = FiliaSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const FilialUpdateSchema = FiliaSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Filial = z.infer<typeof FiliaSchema>;
export type FilialCreate = z.infer<typeof FilialCreateSchema>;
export type FilialUpdate = z.infer<typeof FilialUpdateSchema>;
