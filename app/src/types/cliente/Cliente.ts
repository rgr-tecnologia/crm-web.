import { z } from "zod";

export const ClienteSchema = z.object({
  id: z.string().uuid(),
  nomeFantasia: z.string(),
  ativo: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ClienteCreateSchema = ClienteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const ClienteUpdateSchema = ClienteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Cliente = z.infer<typeof ClienteSchema>;
export type ClienteCreate = z.infer<typeof ClienteCreateSchema>;
export type ClienteUpdate = z.infer<typeof ClienteUpdateSchema>;
