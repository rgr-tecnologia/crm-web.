"use client";

import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Contrato } from "../_types/Contrato";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ContratoListProps = {
  contratos: Contrato[];
};

function Actions({ contrato }: { contrato: Contrato }) {
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

export function ContratosList(props: ContratoListProps) {
  const { contratos } = props;
  return (
    <>
      {contratos.map((contrato) => (
        <Card key={contrato.id}>
          <CardContent>
            <Grid container spacing={2} direction={"column"}>
              <Grid item>Descrição: {contrato.titulo}</Grid>
              <Grid item>Valor: {contrato.valor}</Grid>
            </Grid>
            <Actions contrato={contrato} />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
