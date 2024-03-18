import { Container } from "@mui/material";
import { CreateLeadForm } from "../components/CreateLeadForm";
import { getClientes } from "@/(routes)/clientes/actions";

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
      <CreateLeadForm clientes={clientes} />
    </Container>
  );
}
