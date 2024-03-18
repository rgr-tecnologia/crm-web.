import { UpdateOportunidadeForm } from "@/(routes)/(prospeccoes)/oportunidades/components/OportunidadeUpdateForm";
import { Oportunidade } from "@/src/types/Oportunidade";
import { Container } from "@mui/material";
import { getOportunidade } from "../actions";
import { getRepresentantesByCliente } from "@/(routes)/representantes/actions";

type PageParams = {
  oportunidadeId: Oportunidade["id"];
};

export default async function Page({ params }: { params: PageParams }) {
  const { oportunidadeId } = params;
  const oportunidade = await getOportunidade(oportunidadeId);

  if (!oportunidade) {
    return <Container>Oportunidade não encontrada</Container>;
  }

  const representantes = await getRepresentantesByCliente(
    oportunidade.clienteId
  );

  if (!representantes) {
    return <Container>Erro ao carregar representantes</Container>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <UpdateOportunidadeForm
        oportunidade={oportunidade}
        representantes={representantes}
      />
    </Container>
  );
}
