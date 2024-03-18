import { Container, Typography } from "@mui/material";
import { ContratosList } from "@/src/components/lists/ContratosList/ContratosList";
import { getContratos } from "./actions";

export default async function Page() {
  const contratos = await getContratos();

  if (!contratos) {
    return <Typography variant="h6">Erro ao buscar contratos</Typography>;
  }

  contratos.forEach((contrato) => {
    contrato.createdAt = new Date(contrato.createdAt);
    contrato.updatedAt = new Date(contrato.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <ContratosList contratos={contratos} />
    </Container>
  );
}
