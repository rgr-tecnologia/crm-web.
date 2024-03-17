"use server";

import { get, post, put, remove } from "@/src/lib/useFetch";
import { Cliente } from "@/src/types/cliente/Cliente";
import { CreateCliente } from "@/src/types/cliente/CreateCliente";

export async function getClientes() {
  return get<Cliente[]>(`${process.env.API_URL}/clientes`);
}

export async function getCliente(clienteId: Cliente["id"]) {
  return get<Cliente>(`${process.env.API_URL}/clientes/${clienteId}`);
}

export async function createCliente(cliente: CreateCliente) {
  return post<CreateCliente, Cliente>(
    `${process.env.API_URL}/clientes`,
    cliente
  );
}

export async function updateCliente(
  clienteId: Cliente["id"],
  cliente: Cliente
) {
  return put<CreateCliente, Cliente>(
    `${process.env.API_URL}/clientes/${clienteId}`,
    cliente
  );
}

export async function deleteCliente(clienteId: Cliente["id"]) {
  return remove(`${process.env.NEXT_PUBLIC_API_URL}/clientes/${clienteId}`);
}
