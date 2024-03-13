import { ClientesOportunidadesList } from "@/src/components/lists/ClientesOportunidadesList/ClientesOportunidadesList";
import { OportunidadesList } from "@/src/components/lists/OportunidadesList/OportunidadesList";
import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";
import { Container, Typography } from "@mui/material";

const BFF_URL = process.env.BFF_URL;

async function getOportunidades() {
  const urlToFetch = `${BFF_URL}/oportunidades`;
  const response = await fetch(urlToFetch);
  return response.json();
}

export default async function Page() {
  const oportunidades = await getOportunidades();

  oportunidades.forEach((oportunidade: Oportunidade) => {
    oportunidade.createdAt = new Date(oportunidade.createdAt);
    oportunidade.updatedAt = new Date(oportunidade.updatedAt);
  });

  const content = oportunidades.length ? (
    <ClientesOportunidadesList oportunidades={oportunidades} />
  ) : (
    <Typography>Nenhuma oportunidade cadastrada</Typography>
  );

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
