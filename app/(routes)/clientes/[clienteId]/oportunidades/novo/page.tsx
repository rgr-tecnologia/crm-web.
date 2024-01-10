import { OportunidadeCreateForm } from "@/app/_components/forms/cliente/oportunidade/OportunidadeCreateForm";
import { RepresentanteQueryProvider } from "@/app/_components/queryProviders/RepresentanteQueryProvider";
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
