import { LeadsList } from "@/(routes)/leads/components/LeadsList";
import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Lead } from "@/src/types/lead/Lead";
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

  if (!leads?.length) {
    return (
      <Container>
        <Typography variant="h6">Nenhum lead cadastrado</Typography>
      </Container>
    );
  }

  leads.forEach((lead) => {
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
