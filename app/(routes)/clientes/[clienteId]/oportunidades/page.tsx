import { getOportunidadesByCliente } from "@/(routes)/(prospeccoes)/oportunidades/actions";
import { OportunidadesList } from "@/(routes)/(prospeccoes)/oportunidades/components/OportunidadesList";
import { Oportunidade } from "@/src/types/Oportunidade";
import { Button, Container, Grid } from "@mui/material";
import Link from "next/link";

type Params = {
  clienteId: string;
};

export default async function Page({ params }: { params: Params }) {
  const { clienteId } = params;
  const oportunidades = await getOportunidadesByCliente(clienteId);

  if (!oportunidades) {
    return <Container>Nenhuma oportunidade cadastrada</Container>;
  }

  oportunidades.forEach((oportunidade: Oportunidade) => {
    oportunidade.createdAt = new Date(oportunidade.createdAt);
    oportunidade.updatedAt = new Date(oportunidade.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <OportunidadesList oportunidades={oportunidades} />
    </Container>
  );
}
