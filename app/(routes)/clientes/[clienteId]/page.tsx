import { ClienteQueryProvider } from "@/app/_components/queryProviders/ClienteQueryProvider";
import { UpdateClienteForm } from "@/app/_components/forms/cliente/UpdateClienteForm";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  return (
    <ClienteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <UpdateClienteForm clienteId={params.clienteId} />
      </Container>
    </ClienteQueryProvider>
  );
}
