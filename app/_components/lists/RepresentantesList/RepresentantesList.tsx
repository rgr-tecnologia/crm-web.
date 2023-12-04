import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RepresentantesListActions } from "./RepresentantesListActions";

type RepresentantesListProps = {
  representantes: Representate[];
};

export const RepresentantesList = (props: RepresentantesListProps) => {
  const { representantes } = props;

  return (
    <>
      {representantes.map((representante) => (
        <Grid item key={representante.id}>
          <Card
            sx={{
              width: "100%",
            }}
          >
            <CardContent>
              <Typography variant="body2">{representante.id}</Typography>
              <Typography variant="body2">{representante.nome}</Typography>
              <RepresentantesListActions representante={representante} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
