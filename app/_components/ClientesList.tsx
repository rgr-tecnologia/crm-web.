"use client";

import { Cliente } from "@/app/_types/Cliente";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ClientesListProps = {
  clientes: Cliente[];
};

type ActionsProps = {
  cliente: Cliente;
};

function Actions(props: ActionsProps) {
  const currentPath = usePathname();
  const { cliente } = props;
  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${cliente.id}`}>
            <Typography variant="body2" color={"black"}>
              Editar
            </Typography>
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${cliente.id}/contratos`}>
            <Typography variant="body2" color={"black"}>
              Ver contratos
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export function ClientesList({ clientes }: ClientesListProps) {
  return (
    <>
      {clientes.map((cliente) => (
        <Card key={cliente.id}>
          <CardContent>
            <Typography variant="body2">{cliente.id}</Typography>
            <Typography variant="body2">{cliente.nomeFantasia}</Typography>
            <Actions cliente={cliente} />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
