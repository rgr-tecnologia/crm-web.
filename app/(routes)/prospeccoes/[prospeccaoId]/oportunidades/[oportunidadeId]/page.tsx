import { LeadUpdateOportunidadeForm } from "@/src/components/forms/lead/oportunidade/LeadOportunidadeUpdateForm";
import { RepresentanteQueryProvider } from "@/src/components/queryProviders/RepresentanteQueryProvider";
import { LeadOportunidade } from "@/src/types/prospeccao/oportunidade/Oportunidade";
import { Container } from "@mui/material";

type PageParams = {
  oportunidadeId: LeadOportunidade["id"];
  prospeccaoId: LeadOportunidade["clienteProspeccaoId"];
};

const BFF_URL = process.env.BFF_URL;

const getOportunidadeById = async (
  prospeccaoId: string,
  id: LeadOportunidade["id"]
) => {
  try {
    const res = await fetch(
      `${BFF_URL}/prospeccoes/${prospeccaoId}/oportunidades/${id}`
    );
    if (!res.ok) throw new Error("Erro ao buscar oportunidade");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page({ params }: { params: PageParams }) {
  const { oportunidadeId, prospeccaoId } = params;
  const oportunidade = await getOportunidadeById(prospeccaoId, oportunidadeId);
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <LeadUpdateOportunidadeForm oportunidade={oportunidade} />
      </Container>
    </RepresentanteQueryProvider>
  );
}
