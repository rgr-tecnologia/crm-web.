import { ContratosList } from "@/src/components/lists/ContratosList/ContratosList";
import { Contrato } from "@/src/types/contrato/Contrato";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
  contratoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getContratos(clienteId: string): Promise<Contrato[]> {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/contratos`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  const contratos = await getContratos(clienteId);

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
      <ContratosList contratos={contratos} viewMode={true} />
    </Container>
  );
}
