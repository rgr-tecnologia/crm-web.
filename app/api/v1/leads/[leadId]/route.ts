import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Lead } from "@/app/_types/lead/Lead";

const API_URL = process.env.API_URL;

type Params = {
  leadId: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { leadId } = params;
    const res = await fetch(`${API_URL}/leads/${leadId}`);

    const lead: Lead = await res.json();

    return Response.json(lead);
  } catch (error) {
    return fetchErrorHandler(error);
  }
}
