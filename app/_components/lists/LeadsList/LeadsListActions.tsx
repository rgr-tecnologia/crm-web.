"use client";

import { Lead } from "@/app/_types/lead/Lead";
import { Grid, Button, Link, Typography } from "@mui/material";

type LeadsListActionsProps = {
  lead: Lead;
};

export function LeadsListActions(props: LeadsListActionsProps) {
  const { lead } = props;
  const { id } = lead;

  return (
    <Grid container spacing={2} justifyContent={"flex-end"}>
      <Grid item>
        <Button>
          <Link href={`leads/${id}`}>
            <Typography variant="body2" color={"black"}>
              Editar
            </Typography>
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <Link href={`leads/${id}/promover`}>
            <Typography variant="body2" color={"black"}>
              Gerar oportunidade
            </Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
