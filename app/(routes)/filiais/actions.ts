"use server";
import { get, post, put, remove } from "@/src/lib/useFetch";
import { Filial, FilialCreate } from "@/src/types/Filial";

export async function getFiliais() {
  return get<Filial[]>(`${process.env.API_URL}/filiais`);
}

export async function getFilial(id: string) {
  return get<Filial>(`${process.env.API_URL}/filiais/${id}`);
}

export async function createFilial(data: FilialCreate) {
  return post<FilialCreate, Filial>(`${process.env.API_URL}/filiais`, data);
}

export async function updateFilial(id: string, data: FilialCreate) {
  return put<FilialCreate, Filial>(
    `${process.env.API_URL}/filiais/${id}`,
    data
  );
}

export async function deleteFilial(id: string) {
  return remove(`${process.env.API_URL}/filiais/${id}`);
}
