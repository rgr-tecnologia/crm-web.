import { Oportunidade } from "@/app/_types/oportunidade/Oportunidade";
import { Grid, Button, Typography } from "@mui/material";
import Link from "next/link";

type OportunidadesListActionsProps = {
  oportunidade: Oportunidade;
};

export function OportunidadesListActions(props: OportunidadesListActionsProps) {
  const { oportunidade } = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button>
          <Link href={`/${oportunidade.id}/gerar-contrato`}>
            <Typography variant="body2">Gerar contrato</Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
