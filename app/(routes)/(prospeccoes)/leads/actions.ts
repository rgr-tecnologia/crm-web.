"use server";

import { get, post, put, remove } from "@/src/lib/useFetch";
import { CreateLead, Lead } from "@/src/types/Lead";
import { CreateOportunidade } from "@/src/types/Oportunidade";
import { CreateRepresentante } from "@/src/types/Representante";

export async function getLeads() {
  return get<Lead[]>(`${process.env.API_URL}/leads`);
}

export async function getLead(leadId: Lead["id"]) {
  return get<Lead>(`${process.env.API_URL}/leads/${leadId}`);
}

export async function createLead(lead: CreateLead) {
  return post<CreateLead, Lead>(`${process.env.API_URL}/leads`, lead);
}

export async function updateLead(leadId: Lead["id"], lead: CreateLead) {
  return put<CreateLead, Lead>(`${process.env.API_URL}/leads/${leadId}`, lead);
}

export async function deleteLead(leadId: Lead["id"]) {
  return remove(`${process.env.API_URL}/leads/${leadId}`);
}

export async function promoteLead(
  leadId: Lead["id"],
  representante: CreateRepresentante,
  oportunidade: CreateOportunidade
) {
  return post(`${process.env.API_URL}/leads/${leadId}/promote`, {
    representante,
    oportunidade,
  });
}
