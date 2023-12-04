"use client";

import { Grid, Button, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

type RepresentantesListActionsProps = {
  representante: Representate;
};

export function RepresentantesListActions(
  props: RepresentantesListActionsProps
) {
  const currentPath = usePathname();
  const { representante } = props;

  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${representante.id}`}>
            <Typography variant="body2" color={"black"}>
              Editar
            </Typography>
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <Link href={`${currentPath}/${representante.id}/contratos`}>
            <Typography variant="body2" color={"black"}>
              Ver contratos
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
