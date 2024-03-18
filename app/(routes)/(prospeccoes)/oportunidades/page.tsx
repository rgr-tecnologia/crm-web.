import { Container } from "@mui/material";
import { OportunidadesList } from "./components/OportunidadesList";
import { getOportunidades } from "./actions";
import { Oportunidade } from "@/src/types/Oportunidade";

export default async function Page() {
  const oportunidades = await getOportunidades();

  if (!oportunidades?.length) {
    return <Container>Carregando...</Container>;
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
