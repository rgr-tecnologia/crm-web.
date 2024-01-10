import { LeadOportunidadeCreateForm } from "@/app/_components/forms/lead/oportunidade/LeadOportunidadeCreateForm";
import { RepresentanteQueryProvider } from "@/app/_components/queryProviders/RepresentanteQueryProvider";
import { Container } from "@mui/material";

type PageParams = {
  leadId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { leadId } = params;
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <LeadOportunidadeCreateForm leadId={leadId} />
      </Container>
    </RepresentanteQueryProvider>
  );
}
