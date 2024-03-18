import { getOportunidadesByCliente } from "@/(routes)/(prospeccoes)/oportunidades/actions";
import { ClientesOportunidadesList } from "@/src/components/lists/ClientesOportunidadesList/ClientesOportunidadesList";
import { Oportunidade } from "@/src/types/Oportunidade";
import { Button, Container, Grid, Typography } from "@mui/material";
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
          <ClientesOportunidadesList oportunidades={oportunidades} />
        </Grid>
      </Grid>
    </Container>
  );
}
