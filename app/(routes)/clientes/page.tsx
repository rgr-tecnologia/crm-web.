import { ClientesList } from "@/app/_components/ClientesList/ClientesList";
import { Cliente } from "@/app/_types/Cliente";
import { Button, Container, Grid } from "@mui/material";
import Link from "next/link";

const BFF_URL = process.env.BFF_URL;

async function fetchClientes(): Promise<Cliente[]> {
  const response = await fetch(`${BFF_URL}/clientes`, {
    next: {
      revalidate: 0,
    },
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const clientes = await fetchClientes();

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Link href={"/clientes/novo"} passHref>
            <Button variant={"contained"}>Novo Cliente</Button>
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
          <ClientesList clientes={clientes} />
        </Grid>
      </Grid>
    </Container>
  );
}
