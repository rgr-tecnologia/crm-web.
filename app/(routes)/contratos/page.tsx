import { ContratosList } from "@/app/_components/lists/ContratosList/ContratosList";
import { Contrato } from "@/app/_types/contrato/Contrato";
import { Container } from "@mui/material";

const BFF_URL = process.env.BFF_URL;

async function getContratos(): Promise<Contrato[]> {
  const res = await fetch(`${BFF_URL}/contratos`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function Contratos() {
  const contratos = await getContratos();

  contratos.forEach((contrato) => {
    contrato.createdAt = new Date(contrato.createdAt);
    contrato.updatedAt = new Date(contrato.updatedAt);
    contrato.dataFimPrevista = new Date(contrato.dataFimPrevista);
    contrato.dataInicio = new Date(contrato.dataInicio);
    contrato.dataPagamento = new Date(contrato.dataPagamento);
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
