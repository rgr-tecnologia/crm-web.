import { OportunidadeCreateForm } from "@/src/components/forms/cliente/oportunidade/OportunidadeCreateForm";
import { RepresentanteQueryProvider } from "@/src/components/queryProviders/RepresentanteQueryProvider";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <OportunidadeCreateForm clienteId={clienteId} />
      </Container>
    </RepresentanteQueryProvider>
  );
}
