import { ContratosList } from "@/app/_components/ContratosList";
import { Box } from "@mui/material";

type PageParams = {
  clienteId: string;
  contratoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getContratos(clienteId: string) {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}/contratos`);
  const contratos = await res.json();

  return contratos;
}

export default async function Page({ params }: { params: PageParams }) {
  const { contratos } = await getContratos(params.clienteId);

  return (
    <Box>
      <ContratosList contratos={contratos} />
    </Box>
  );
}
