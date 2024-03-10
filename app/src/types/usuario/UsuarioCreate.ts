import { Usuario } from "./Usuario";

export type UsuarioCreate = Omit<Usuario, "id" | "createdAt" | "updatedAt">;
