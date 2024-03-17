import { UpdateClienteForm } from "@/(routes)/clientes/components/UpdateClienteForm";
import { Container } from "@mui/material";
import { getCliente } from "../actions";

type PageParams = {
  clienteId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const cliente = await getCliente(params.clienteId);

  if (!cliente) {
    return <p>Erro ao buscar cliente</p>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <UpdateClienteForm cliente={cliente} />
    </Container>
  );
}
