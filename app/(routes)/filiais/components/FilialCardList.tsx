import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { ListOrderIdentifier } from "@/src/components/lists/ListOrderIdentifier/ListOrderIdentifier";
import { Filial } from "@/src/types/Filial";
import { FilialListActions } from "./FilialListActions";

type FilialCardListProps = {
  filiais: Filial[];
};

export function FilialCardList({ filiais }: FilialCardListProps) {
  return (
    <Grid container spacing={2}>
      {filiais.map((filial, index) => {
        const { nome, createdAt, updatedAt, ativo } = filial;
        return (
          <Grid item key={filial.id} xs={12}>
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
                      <Typography variant="caption">Nome Fantasia</Typography>
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
                      <Grid item container direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">Status</Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="body2"
                            color={
                              filial?.ativo ? "success.main" : "error.main"
                            }
                            fontWeight={"bold"}
                          >
                            {ativo ? "ATIVO" : "INATIVO"}
                          </Typography>
                        </Grid>
                      </Grid>
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
                    <FilialListActions filial={filial} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
