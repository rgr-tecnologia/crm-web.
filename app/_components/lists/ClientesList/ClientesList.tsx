import { Cliente } from "@/app/_types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ClientesListActions } from "./ClientesListActions";

type ClientesListProps = {
  clientes: Cliente[];
};

export function ClientesList({ clientes }: ClientesListProps) {
  if (!clientes.length) {
    return (
      <Grid item>
        <Typography>Nenhum cliente cadastrado</Typography>
      </Grid>
    );
  }

  return (
    <>
      {clientes.map((cliente) => (
        <Grid item key={cliente.id}>
          <Card
            sx={{
              borderLeft: "4px solid",
              borderColor: cliente?.ativo ? "success.main" : "error.main",
            }}
          >
            <CardContent>
              <Grid
                container
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <Grid item>
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {cliente.nomeFantasia}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="caption"
                        fontWeight={"bold"}
                        color={cliente?.ativo ? "success.main" : "error.main"}
                      >
                        {cliente?.ativo ? "ATIVO" : "INATIVO"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <ClientesListActions cliente={cliente} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
