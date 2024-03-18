import { Container } from "@mui/material";
import { getClientes } from "@/(routes)/clientes/actions";
import { FilialCreateForm } from "../components/FilialCreateForm";

export default async function Page() {
  const clientes = await getClientes();

  if (!clientes) {
    return <p>Erro ao buscar clientes</p>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <FilialCreateForm clientes={clientes} />
    </Container>
  );
}
