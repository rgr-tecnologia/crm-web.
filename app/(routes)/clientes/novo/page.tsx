import { ClienteQueryProvider } from "@/src/components/queryProviders/ClienteQueryProvider";
import { CreateClienteForm } from "@/(routes)/clientes/components/CreateClienteForm";
import { Container } from "@mui/material";

export default function Page() {
  return (
    <ClienteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <CreateClienteForm />
      </Container>
    </ClienteQueryProvider>
  );
}
