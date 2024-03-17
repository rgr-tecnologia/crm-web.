import { ClientesList } from "@/(routes)/clientes/components/ClientesList";
import { Container } from "@mui/material";
import { get } from "@/src/lib/useFetch";
import { Cliente } from "@/src/types/cliente/Cliente";

const endpoint = `${process.env.API_URL}/clientes`;

export default async function Page() {
  const clientes = await get<Cliente[]>(endpoint);

  if (!clientes) {
    return <p>Erro ao buscar clientes</p>;
  }

  clientes.forEach((cliente) => {
    cliente.createdAt = new Date(cliente.createdAt);
    cliente.updatedAt = new Date(cliente.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <ClientesList clientes={clientes} />
    </Container>
  );
}
