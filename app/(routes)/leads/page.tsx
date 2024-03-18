import { LeadsList } from "@/(routes)/leads/components/LeadsList";
import { Container, Typography } from "@mui/material";
import { getLeads } from "./actions";

export default async function Page() {
  const leads = await getLeads();

  if (!leads) {
    return <Typography variant="h6">Erro ao buscar leads</Typography>;
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
