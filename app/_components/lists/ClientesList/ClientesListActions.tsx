"use client";

import { Cliente } from "@/app/_types/cliente/Cliente";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ClientesListActionsProps = {
  cliente: Cliente;
};

export function ClientesListActions(props: ClientesListActionsProps) {
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
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${cliente.id}/representantes`}>
            <Typography variant="body2" color={"black"}>
              Ver representantes
            </Typography>
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${cliente.id}/oportunidades`}>
            <Typography variant="body2" color={"black"}>
              Ver oportunidades
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
