"use server";

import { get, post, put, remove } from "@/src/lib/useFetch";
import { Contrato, ContratoCreate, ContratoUpdate } from "@/src/types/Contrato";

export async function getContratos() {
  return get<Contrato[]>(`${process.env.API_URL}/contratos`);
}

export async function getContrato(id: string) {
  return get<Contrato>(`${process.env.API_URL}/contratos/${id}`);
}

export async function createContrato(contrato: Contrato) {
  return post<ContratoCreate, Contrato>(
    `${process.env.API_URL}/contratos`,
    contrato
  );
}

export async function updateContrato(contrato: Contrato) {
  return put<ContratoUpdate, Contrato>(
    `${process.env.API_URL}/contratos/${contrato.id}`,
    contrato
  );
}

export async function deleteContrato(id: string) {
  return remove(`${process.env.API_URL}/contratos/${id}`);
}
