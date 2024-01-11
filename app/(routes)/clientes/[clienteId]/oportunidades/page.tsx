import { ClientesOportunidadesList } from "@/app/_components/lists/ClientesOportunidadesList/ClientesOportunidadesList";
import { Oportunidade } from "@/app/_types/cliente/oportunidade/Oportunidade";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

type Params = {
  clienteId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getOportunidades(clienteId: string) {
  const urlToFetch = `${BFF_URL}/clientes/${clienteId}/oportunidades`;
  const response = await fetch(urlToFetch);
  return response.json();
}

export default async function Page({ params }: { params: Params }) {
  const { clienteId } = params;
  const oportunidades = await getOportunidades(clienteId);

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
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Link href={"oportunidades/novo"} passHref>
            <Button variant={"contained"}>Nova oportunidade</Button>
          </Link>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "100%",
          }}
          spacing={2}
          direction={"column"}
        >
          {content}
        </Grid>
      </Grid>
    </Container>
  );
}
