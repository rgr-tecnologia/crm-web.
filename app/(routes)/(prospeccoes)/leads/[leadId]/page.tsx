import { Container } from "@mui/material";
import { getLead } from "../actions";
import { getClientes } from "@/(routes)/clientes/actions";
import { UpdateLeadForm } from "../components/UpdateLeadForm";

type PageParams = {
  leadId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const lead = await getLead(params.leadId);
  const clientes = await getClientes();

  if (!lead) {
    return <Container>Erro ao buscar lead</Container>;
  }

  if (!clientes) {
    return <Container>Erro ao buscar clientes</Container>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <UpdateLeadForm lead={lead} clientes={clientes} />
    </Container>
  );
}
