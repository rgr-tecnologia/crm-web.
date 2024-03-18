"use server";
import { get, post, put, remove } from "@/src/lib/useFetch";
import { Contrato, ContratoCreate } from "@/src/types/Contrato";
import { Oportunidade, CreateOportunidade } from "@/src/types/Oportunidade";

const API_URL = process.env.API_URL;

export async function getOportunidades() {
  return await get<Oportunidade[]>(`${API_URL}/oportunidades`);
}

export async function getOportunidade(id: string) {
  return await get<Oportunidade>(`${API_URL}/oportunidades/${id}`);
}

export async function getOportunidadesByCliente(clienteId: string) {
  return await get<Oportunidade[]>(
    `${API_URL}/clientes/${clienteId}/oportunidades`
  );
}

export async function createOportunidade(oportunidade: CreateOportunidade) {
  return await post<CreateOportunidade, Oportunidade>(
    `${API_URL}/clientes/${oportunidade.clienteId}/oportunidades`,
    oportunidade
  );
}

export async function updateOportunidade(
  oportunidadeId: Oportunidade["id"],
  oportunidade: Oportunidade
) {
  return await put<CreateOportunidade, Oportunidade>(
    `${API_URL}/oportunidades/${oportunidadeId}`,
    oportunidade
  );
}

export async function encerrarOportunidade(id: string) {
  return await post<Oportunidade, Oportunidade>(
    `${API_URL}/oportunidades/${id}/encerrar`
  );
}

export async function reabrirOportunidade(id: string) {
  return await post<Oportunidade, Oportunidade>(
    `${API_URL}/oportunidades/${id}/reabrir`
  );
}

export async function deleteOportunidade(id: string) {
  return await remove(`${API_URL}/oportunidades/${id}`);
}

export async function gerarContrato(contrato: ContratoCreate) {
  return await post<ContratoCreate, Contrato>(
    `${API_URL}/oportunidades/${contrato.oportunidadeId}/gerar-contrato`
  );
}
