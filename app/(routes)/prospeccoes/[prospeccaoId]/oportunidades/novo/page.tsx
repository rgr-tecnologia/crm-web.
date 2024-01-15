import { LeadOportunidadeCreateForm } from "@/app/_components/forms/lead/oportunidade/LeadOportunidadeCreateForm";
import { RepresentanteQueryProvider } from "@/app/_components/queryProviders/RepresentanteQueryProvider";
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
