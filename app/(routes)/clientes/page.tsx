import { ClientesList } from "@/app/_components/ClientesList";
import { Cliente } from "@/app/_types/Cliente";
import { Button, Grid } from "@mui/material";
import Link from "next/link";

const BFF_URL = process.env.BFF_URL;

async function fetchClientes(): Promise<Cliente[]> {
  const response = await fetch(`${BFF_URL}/clientes`);
  const data = await response.json();
  return data;
}

export default async function Page() {
  const clientes = await fetchClientes();

  return (
    <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Link href={"/clientes/novo"} passHref>
          <Button variant={"contained"}>Novo Cliente</Button>
        </Link>
      </Grid>
      <Grid item>
        <ClientesList clientes={clientes} />
      </Grid>
    </Grid>
  );
}
