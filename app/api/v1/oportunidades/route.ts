import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const urlToFetch = `${API_URL}/oportunidades`;
    const res = await fetch(urlToFetch);
    const resJSON = await res.json();
    return Response.json(resJSON);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
