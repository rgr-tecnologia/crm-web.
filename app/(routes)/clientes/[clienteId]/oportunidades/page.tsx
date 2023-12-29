import { OportunidadesList } from "@/app/_components/lists/OportunidadesList/OportunidadesList";
import { Button, Container, Grid } from "@mui/material";
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
          <Link href={"novo"} passHref>
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
          <OportunidadesList oportunidades={oportunidades} />
        </Grid>
      </Grid>
    </Container>
  );
}
