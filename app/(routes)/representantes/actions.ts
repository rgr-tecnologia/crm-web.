"use server";
import { get, post, put, remove } from "@/src/lib/useFetch";
import { CreateRepresentante, Representate } from "@/src/types/Representante";

export async function getRepresentantes() {
  return get<Representate[]>(`${process.env.API_URL}/representantes`);
}

export async function getRepresentantesByCliente(clienteId: string) {
  return get<Representate[]>(
    `${process.env.API_URL}/representantes?clienteId=${clienteId}`
  );
}

export async function getRepresentante(representanteId: Representate["id"]) {
  return get<Representate>(
    `${process.env.API_URL}/representantes/${representanteId}`
  );
}

export async function createRepresentante(representante: Representate) {
  return post<CreateRepresentante, Representate>(
    `${process.env.API_URL}/representantes`,
    representante
  );
}

export async function updateRepresentante(
  representanteId: Representate["id"],
  representante: Representate
) {
  return put<CreateRepresentante, Representate>(
    `${process.env.API_URL}/representantes/${representanteId}`,
    representante
  );
}

export async function deleteRepresentante(representanteId: Representate["id"]) {
  return remove(
    `${process.env.NEXT_PUBLIC_API_URL}/representantes/${representanteId}`
  );
}
