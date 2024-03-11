import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";

const API_URL = process.env.API_URL;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/auth/verify`);
    const verify = await res.json();

    return Response.json(verify);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
