import { UpdateLeadForm } from "@/src/components/forms/lead/UpdateLeadForm";
import { ClienteQueryProvider } from "@/src/components/queryProviders/ClienteQueryProvider";
import { getLeadById } from "@/src/lib/utils/leads/getLeadById";
import { Container } from "@mui/material";

type PageParams = {
  leadId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const lead = await getLeadById(params.leadId);
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <ClienteQueryProvider>
        <UpdateLeadForm lead={lead} />
      </ClienteQueryProvider>
    </Container>
  );
}
