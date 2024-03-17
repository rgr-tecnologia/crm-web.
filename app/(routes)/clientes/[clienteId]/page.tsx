import { ClienteQueryProvider } from "@/src/components/queryProviders/ClienteQueryProvider";
import { UpdateClienteForm } from "@/(routes)/clientes/components/UpdateClienteForm";
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
