"use client";

import { Representate } from "@/src/types/cliente/representante/Representante";
import { Grid, Button, Link, Typography } from "@mui/material";

type RepresentantesListActionsProps = {
  representante: Representate;
};

export function RepresentantesListActions(
  props: RepresentantesListActionsProps
) {
  const { representante } = props;

  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      <Grid item>
        <Button>
          <Link href={`representantes/${representante.id}`}>
            <Typography variant="body2" color={"black"}>
              Editar
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
