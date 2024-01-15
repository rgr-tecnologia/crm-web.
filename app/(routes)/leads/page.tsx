import { LeadsList } from "@/app/_components/lists/LeadsList/LeadsList";
import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Lead } from "@/app/_types/lead/Lead";
import { Container, Typography } from "@mui/material";

const BFF_URL = process.env.BFF_URL;

async function fetchLeads() {
  try {
    const response = await fetch(`${BFF_URL}/leads`, {
      next: {
        revalidate: 0,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar leads");
    }

    const data: Lead[] = await response.json();
    return data;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export default async function Page() {
  const leads = await fetchLeads();

  leads?.forEach((lead) => {
    lead.createdAt = new Date(lead.createdAt);
    lead.updatedAt = new Date(lead.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <LeadsList leads={leads || []} />
    </Container>
  );
}
