import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { RepresentantesListActions } from "./RepresentantesListActions";
import { Representate } from "@/app/_types/cliente/representante/Representante";
import { ListOrderIdentifier } from "../ListOrderIdentifier/ListOrderIdentifier";

type RepresentantesListProps = {
  representantes: Representate[];
};

export const RepresentantesList = (props: RepresentantesListProps) => {
  const { representantes } = props;

  return (
    <Grid container spacing={2}>
      {representantes.map((representante, index) => {
        const { id, nome, createdAt, updatedAt } = representante;
        return (
          <Grid item key={id} xs={12}>
            <Card
              sx={{
                width: "100%",
                borderLeft: "4px solid",
                borderColor: "primary.main",
              }}
            >
              <CardContent>
                <Grid
                  container
                  direction={"row"}
                  spacing={2}
                  justifyContent={"space-around"}
                >
                  <Grid item>
                    <ListOrderIdentifier index={index} />
                  </Grid>
                  <Grid container item spacing={1} direction={"column"} xs={10}>
                    <Grid item>
                      <Typography variant="caption">Nome</Typography>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {nome}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      container
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Grid container item direction={"row"} spacing={1} xs={4}>
                        <Grid item>
                          <Typography variant="caption">
                            Data de criação
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {createdAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Data de atualização
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {updatedAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <RepresentantesListActions representante={representante} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
