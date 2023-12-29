import { ContratosList } from "@/app/_components/lists/ContratosList/ContratosList";
import { Contrato } from "@/app/_types/contrato/Contrato";
import { Box, Button, Container, Grid } from "@mui/material";
import Link from "next/link";

type PageParams = {
  clienteId: string;
  contratoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getContratos(clienteId: string): Promise<Contrato[]> {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/contratos`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  const contratos = await getContratos(clienteId);

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
          <Link href={`contratos/novo`} passHref>
            <Button variant={"contained"}>Novo contrato</Button>
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
          <ContratosList contratos={contratos} />
        </Grid>
      </Grid>
    </Container>
  );
}
