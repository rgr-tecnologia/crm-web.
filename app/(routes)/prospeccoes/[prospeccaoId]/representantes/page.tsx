import { Button, Container, Grid, Typography } from "@mui/material";
import { RepresentantesList } from "@/app/_components/lists/RepresentantesList/RepresentantesList";
import Link from "next/link";
import { Representate } from "@/app/_types/cliente/representante/Representante";

type Params = {
  prospeccaoId: string;
};

const BFF_URL = process.env.BFF_URL;

const getRepresentantes = async (clienteId: string) => {
  const response = await fetch(
    `${BFF_URL}/prospeccoes/${clienteId}/representantes`,
    {
      cache: "no-store",
    }
  );
  const data: Representate[] = await response.json();
  return data;
};

export default async function Page({ params }: { params: Params }) {
  const { prospeccaoId } = params;

  const representantes = await getRepresentantes(prospeccaoId);

  representantes.forEach((representante) => {
    representante.createdAt = new Date(representante.createdAt);
    representante.updatedAt = new Date(representante.updatedAt);
  });

  const content = representantes.length ? (
    <RepresentantesList representantes={representantes} />
  ) : (
    <Typography variant="body1">
      Não há representantes cadastrados para este cliente.
    </Typography>
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
          <Link href={"representantes/novo"} passHref>
            <Button variant={"contained"}>Novo Representante</Button>
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
