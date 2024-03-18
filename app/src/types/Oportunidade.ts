import { z } from "zod";
import { AreaExecutora } from "./enums/AreaExecutora";
import { OportunidadeCaracteristica } from "./enums/OportunidadeCaracteristica";
import { OportunidadeEtapa } from "./enums/OportunidadeEtapa";

export const OportunidadeSchema = z.object({
  id: z.string().uuid(),
  clienteId: z.string().uuid(),
  representanteId: z.string().uuid(),
  titulo: z.string(),
  caracteristica: z.nativeEnum(OportunidadeCaracteristica),
  areaExecutora: z.nativeEnum(AreaExecutora),
  etapa: z.nativeEnum(OportunidadeEtapa),
  dataFechamentoPrevista: z.coerce.date(),
  valor: z.preprocess((val) => Number(val), z.number()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateOportunidadeSchema = OportunidadeSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Oportunidade = z.infer<typeof OportunidadeSchema>;
export type CreateOportunidade = z.infer<typeof OportunidadeSchema>;
