import { Usuario } from "@/src/types/usuario/Usuario";
import { UsuarioCreate } from "@/src/types/usuario/UsuarioCreate";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function convidarUsuario(data: UsuarioCreate) {
  try {
    const res = await fetch(`${BFF_URL}/auth/invite`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const usuario: Usuario = await res.json();

    if (res.ok) {
      Promise.resolve(usuario);
    } else {
      throw new Error("Erro ao criar usuário");
    }
  } catch (error) {
    if (error instanceof Error) throw Error(error.message);
  }
}
