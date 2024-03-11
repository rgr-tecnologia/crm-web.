import { UpdateLeadForm } from "@/src/components/forms/lead/UpdateLeadForm";
import { getLeadById } from "@/src/lib/utils/lead/getLeadById";
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
      <UpdateLeadForm lead={lead} />
    </Container>
  );
}
