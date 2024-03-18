import { z } from "zod";
import { mobilePhoneSchema } from "../zod/mobilePhoneSchema";

export const RepresentanteSchema = z.object({
  id: z.string(),
  clienteId: z.string(),
  nome: z.string(),
  email: z.string().email(),
  telefone: mobilePhoneSchema,
  cargo: z.string(),
  ativo: z.boolean(),
  departamento: z.string(),
  dataNascimento: z.coerce.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateRepresentanteSchema = RepresentanteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateRepresentanteSchema = RepresentanteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  clienteId: true,
});

export type Representate = z.infer<typeof RepresentanteSchema>;
export type CreateRepresentante = z.infer<typeof CreateRepresentanteSchema>;
export type UpdateRepresentante = z.infer<typeof UpdateRepresentanteSchema>;
