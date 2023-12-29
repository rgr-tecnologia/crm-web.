import { CreateContratoForm } from "@/app/_components/forms/contrato/CreateContratoForm";
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
        <CreateContratoForm clienteId={clienteId} />
      </Container>
    </RepresentanteQueryProvider>
  );
}
