import { Oportunidade } from "@/app/_types/oportunidade/Oportunidade";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { OportunidadesListActions } from "./OportunidadesListActions";

type OportunidadesListProps = {
  oportunidades: Oportunidade[];
};

export function OportunidadesList(props: OportunidadesListProps) {
  const { oportunidades } = props;
  return (
    <Grid container spacing={2}>
      {oportunidades.map((oportunidade) => (
        <Card
          sx={{
            width: "100%",
          }}
        >
          <CardContent>
            <Typography variant="body2">{oportunidade.titulo}</Typography>
            <OportunidadesListActions oportunidade={oportunidade} />
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
