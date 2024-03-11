import { LeadOportunidadeCreateForm } from "@/src/components/forms/lead/oportunidade/LeadOportunidadeCreateForm";
import { RepresentanteQueryProvider } from "@/src/components/queryProviders/RepresentanteQueryProvider";
import { Container } from "@mui/material";

type PageParams = {
  prospeccaoId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { prospeccaoId } = params;
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <LeadOportunidadeCreateForm prospeccaoId={prospeccaoId} />
      </Container>
    </RepresentanteQueryProvider>
  );
}
