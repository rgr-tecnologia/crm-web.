import { z } from "zod";

export const FilialEnderecoSchema = z.object({
  id: z.string().uuid(),
  cep: z.string(),
  logradouro: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const FilialEnderecoCreateSchema = FilialEnderecoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const FilialEnderecoUpdateSchema = FilialEnderecoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type FilialEndereco = z.infer<typeof FilialEnderecoSchema>;
export type FilialEnderecoCreate = z.infer<typeof FilialEnderecoCreateSchema>;
export type FilialEnderecoUpdate = z.infer<typeof FilialEnderecoUpdateSchema>;
