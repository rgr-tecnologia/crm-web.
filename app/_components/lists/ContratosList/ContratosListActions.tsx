"use client";

import { Contrato } from "@/app/_types/Contrato";
import { Button, Grid, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ContratosListActions({ contrato }: { contrato: Contrato }) {
  const currentPath = usePathname();
  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      <Grid item>
        <Link href={`${currentPath}/${contrato.id}`} passHref>
          <Typography variant="body2" color={"black"}>
            <Button>Editar</Button>
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link href={`${currentPath}/${contrato.id}`} passHref>
          <Typography variant="body2" color={"black"}>
            <Button>Excluir</Button>
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
