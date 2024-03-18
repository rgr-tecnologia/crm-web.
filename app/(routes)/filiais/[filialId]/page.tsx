import { Container } from "@mui/material";
import { getFilial } from "../actions";
import { FilialUpdateForm } from "../components/FilialUpdateForm";
import { getClientes } from "@/(routes)/clientes/actions";

type PageParams = {
  filialId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  const filial = await getFilial(params.filialId);
  const clientes = await getClientes();

  if (!filial) {
    return <Container>Erro ao buscar filial</Container>;
  }

  if (!clientes) {
    return <Container>Erro ao buscar clientes</Container>;
  }

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <FilialUpdateForm filial={filial} clientes={clientes} />
    </Container>
  );
}
