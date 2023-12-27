import { Cliente } from "@/app/_types/cliente/Cliente";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ClientesListActions } from "./ClientesListActions";

type ClientesListProps = {
  clientes: Cliente[];
};

export function ClientesList({ clientes }: ClientesListProps) {
  return (
    <>
      {clientes.map((cliente) => (
        <Grid item key={cliente.id}>
          <Card
            sx={{
              width: "100%",
            }}
          >
            <CardContent>
              <Typography variant="body2">{cliente.id}</Typography>
              <Typography variant="body2">{cliente.nomeFantasia}</Typography>
              <ClientesListActions cliente={cliente} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
