import { Cliente } from "../types/cliente/Cliente";
import { useFetch } from "./useFetch";

export function useClientes() {
  return useFetch<Cliente[]>(
    "clientes",
    `${process.env.NEXT_PUBLIC_BFF_URL}/clientes`
  );
}
