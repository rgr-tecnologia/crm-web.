import { Lead } from "./Lead";

export type CreateLead = Omit<Lead, "id" | "createdAt" | "updatedAt">;
