import { z } from "zod";
import { ContratoCaracteristica } from "./enums/ContratoCaracteristica";
import { AreaExecutora } from "./enums/AreaExecutora";

export const ContratoSchema = z.object({
  id: z.string().uuid(),
  filialId: z.string().uuid(),
  oportunidadeId: z.string().uuid(),
  titulo: z.string(),
  caracteristica: z.nativeEnum(ContratoCaracteristica),
  dataInicio: z.coerce.date(),
  dataFimPrevista: z.coerce.date(),
  dataPagamento: z.coerce.date(),
  valor: z.preprocess((val) => Number(val), z.number()),
  representanteId: z.string().uuid(),
  areaExecutora: z.nativeEnum(AreaExecutora),
  ativo: z.boolean(),
  renovarAutomaticamente: z.boolean(),
  numeroParcelas: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const ContratoSchemaCreate = ContratoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const ContratoSchemaUpdate = ContratoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Contrato = z.infer<typeof ContratoSchema>;
export type ContratoCreate = z.infer<typeof ContratoSchemaCreate>;
export type ContratoUpdate = z.infer<typeof ContratoSchemaUpdate>;
