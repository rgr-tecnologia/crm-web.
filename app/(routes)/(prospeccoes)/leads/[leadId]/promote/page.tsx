import { Container } from "@mui/material";
import PromoverLeadForm from "../../components/PromoverLeadForm";
import { getLead } from "../../actions";
import { getRepresentantesByCliente } from "@/(routes)/representantes/actions";

type PageParams = {
  leadId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const { leadId } = params;
  const lead = await getLead(leadId);

  if (!lead) {
    return <Container>Não foi possível carregar o lead</Container>;
  }

  const representantes = await getRepresentantesByCliente(lead.clienteId);

  if (!representantes) {
    return <Container>Não foi possível carregar os representantes</Container>;
  }

  return (
    <Container>
      <PromoverLeadForm lead={lead} representantes={representantes} />
    </Container>
  );
}
