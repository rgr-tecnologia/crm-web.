import { ClienteQueryProvider } from "@/app/_components/forms/cliente/ClientQueryProvider";
import { CreateClienteForm } from "@/app/_components/forms/cliente/CreateClienteForm";
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
