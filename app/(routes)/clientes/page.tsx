import { ClientesList } from "@/src/components/lists/ClientesList/ClientesList";
import { Cliente } from "@/src/types/cliente/Cliente";
import { Container } from "@mui/material";

const BFF_URL = process.env.BFF_URL;

async function fetchClientes(): Promise<Cliente[]> {
  const response = await fetch(`${BFF_URL}/clientes`, {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Page() {
  const clientes = await fetchClientes();

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
