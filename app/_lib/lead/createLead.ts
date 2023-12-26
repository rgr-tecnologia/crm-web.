import { CreateLead } from "@/app/_types/lead/CreateLead";
import { Lead } from "@/app/_types/lead/Lead";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const createLead = async (data: CreateLead) => {
  const res = await fetch(`${BFF_URL}/leads`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
  });

  const json: Lead = await res.json();

  return json;
};
