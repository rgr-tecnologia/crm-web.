import { UpdateOportunidadeForm } from "@/src/components/forms/cliente/oportunidade/OportunidadeUpdateForm";
import { RepresentanteQueryProvider } from "@/src/components/queryProviders/RepresentanteQueryProvider";
import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";
import { Container } from "@mui/material";

type PageParams = {
  oportunidadeId: Oportunidade["id"];
  clienteId: string;
};

const BFF_URL = process.env.BFF_URL;

const getOportunidadeById = async (
  clienteId: string,
  id: Oportunidade["id"]
) => {
  try {
    const res = await fetch(
      `${BFF_URL}/clientes/${clienteId}/oportunidades/${id}`
    );
    if (!res.ok) throw new Error("Erro ao buscar oportunidade");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page({ params }: { params: PageParams }) {
  const { oportunidadeId, clienteId } = params;
  const oportunidade = await getOportunidadeById(clienteId, oportunidadeId);
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <UpdateOportunidadeForm
          clienteId={clienteId}
          oportunidade={oportunidade}
        />
      </Container>
    </RepresentanteQueryProvider>
  );
}
