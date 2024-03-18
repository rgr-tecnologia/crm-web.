import { z } from "zod";
import { mobilePhoneSchema } from "../zod/mobilePhoneSchema";

export const LeadSchema = z.object({
  id: z.string().uuid(),
  clienteId: z.string().uuid(),
  nomeRepresentante: z.string().min(1),
  emailRepresentante: z.string().min(1).email(),
  telefoneRepresentante: mobilePhoneSchema,
  observacao: z.string().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateLeadSchema = LeadSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Lead = z.infer<typeof LeadSchema>;
export type CreateLead = z.infer<typeof CreateLeadSchema>;
