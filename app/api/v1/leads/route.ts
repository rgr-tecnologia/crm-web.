import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Lead } from "@/app/_types/lead/Lead";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/leads/`);
    const leads: Lead[] = await res.json();

    return Response.json(leads);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${API_URL}/leads/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const lead: Lead = await res.json();

    if (!res.ok) {
      throw Error("Erro ao criar lead");
    }

    return Response.json(lead);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
