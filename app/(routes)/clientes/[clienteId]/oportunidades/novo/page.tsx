import { OportunidadeCreateForm } from "@/(routes)/(prospeccoes)/oportunidades/components/OportunidadeCreateForm";
import { getRepresentantesByCliente } from "@/(routes)/representantes/actions";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  const representantes = await getRepresentantesByCliente(clienteId);

  if (!representantes) {
    return <Container>Erro ao carregar representantes</Container>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <OportunidadeCreateForm
        clienteId={clienteId}
        representantes={representantes}
      />
    </Container>
  );
}
