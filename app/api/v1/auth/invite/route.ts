import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";

const API_URL = process.env.API_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${API_URL}/auth/invite`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const invite = await res.json();

    if (!res.ok) {
      throw Error("Erro ao criar convite");
    }

    return Response.json(invite);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
