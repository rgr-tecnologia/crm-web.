import { Container } from "@mui/material";
import { GerarContratoForm } from "../../components/GerarContratoForm";
import { getOportunidade } from "../../actions";
import { getFiliaisByCliente } from "@/(routes)/filiais/actions";
import { ContratoCreate } from "@/src/types/Contrato";

type Params = {
  oportunidadeId: string;
};

export default async function Page({ params }: { params: Params }) {
  const { oportunidadeId } = params;

  const oportunidade = await getOportunidade(oportunidadeId);

  if (!oportunidade) {
    return <Container>Erro ao buscar oportunidade</Container>;
  }

  const filiais = await getFiliaisByCliente(oportunidade.clienteId);

  if (!filiais) {
    return <Container>Erro ao buscar filiais</Container>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <GerarContratoForm oportunidade={oportunidade} filiais={filiais} />
    </Container>
  );
}
