import { CreateLead } from "@/src/types/lead/CreateLead";
import { Lead } from "@/src/types/lead/Lead";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const updateLead = async (id: string, data: CreateLead) => {
  try {
    const res = await fetch(`${BFF_URL}/leads/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cliente: Lead = await res.json();

    if (res.ok) {
      Promise.resolve(cliente);
    } else {
      throw new Error("Erro ao atualizar lead");
    }
  } catch (error) {
    if (error instanceof Error) throw Error(error.message);
  }
};
