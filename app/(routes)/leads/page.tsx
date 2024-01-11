import { LeadsList } from "@/app/_components/lists/LeadsList/LeadsList";
import { Lead } from "@/app/_types/lead/Lead";
import { Button, Container, Grid } from "@mui/material";
import Link from "next/link";

const BFF_URL = process.env.BFF_URL;

async function fetchLeads(): Promise<Lead[]> {
  const response = await fetch(`${BFF_URL}/leads`, {
    next: {
      revalidate: 0,
    },
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const leads = await fetchLeads();

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
      <LeadsList leads={leads} />
    </Container>
  );
}
