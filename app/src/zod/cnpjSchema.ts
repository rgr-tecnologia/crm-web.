import { z } from "zod";
import { isCnpjValid } from "../lib/utils/validators/isCnpjValid";
import { unmaskCnpj } from "../lib/utils/formatters/unmaskCnpj";

export const cnpjSchema = z
  .preprocess((cnpj) => unmaskCnpj(cnpj as string), z.string())
  .refine(isCnpjValid, { message: "CNPJ inválido" });
