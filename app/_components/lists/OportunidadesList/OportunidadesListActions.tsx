import { Oportunidade } from "@/app/_types/oportunidade/Oportunidade";
import { Grid, Button, Typography } from "@mui/material";
import Link from "next/link";

type OportunidadesListActionsProps = {
  oportunidade: Oportunidade;
};

export function OportunidadesListActions(props: OportunidadesListActionsProps) {
  const { oportunidade } = props;
  const { id, clienteId } = oportunidade;

  return (
    <Grid container spacing={2} direction={"row"}>
      <Grid item>
        <Button>
          <Link href={`/clientes/${clienteId}/oportunidades/${id}`}>
            <Typography variant="body2">Ver detalhes</Typography>
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <Link href={`/${id}/gerar-contrato`}>
            <Typography variant="body2">Gerar contrato</Typography>
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
