"use server";

import { get, post, put, remove } from "@/src/lib/useFetch";
import { Lead } from "@/src/types/lead/Lead";
import { CreateLead } from "@/src/types/lead/CreateLead";

export async function getLeads() {
  return get<Lead[]>(`${process.env.API_URL}/leads`);
}

export async function getLead(leadId: Lead["id"]) {
  return get<Lead>(`${process.env.API_URL}/leads/${leadId}`);
}

export async function createLead(lead: CreateLead) {
  return post<CreateLead, Lead>(`${process.env.API_URL}/leads`, lead);
}

export async function updateLead(leadId: Lead["id"], lead: Lead) {
  return put<CreateLead, Lead>(`${process.env.API_URL}/leads/${leadId}`, lead);
}

export async function deleteLead(leadId: Lead["id"]) {
  return remove(`${process.env.API_URL}/leads/${leadId}`);
}
