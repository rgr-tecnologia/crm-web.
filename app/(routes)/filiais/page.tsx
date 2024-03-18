import { Container, Typography } from "@mui/material";
import { getFiliais } from "./actions";
import { FilialList } from "./components/FilialList";

export default async function Page() {
  const filiais = await getFiliais();

  if (!filiais) {
    return <Typography variant="h6">Erro ao buscar filiais</Typography>;
  }

  filiais.forEach((filial) => {
    filial.createdAt = new Date(filial.createdAt);
    filial.updatedAt = new Date(filial.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <FilialList filiais={filiais} />
    </Container>
  );
}
