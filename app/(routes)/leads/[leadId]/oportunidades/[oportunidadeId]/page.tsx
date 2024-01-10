import { LeadUpdateOportunidadeForm } from "@/app/_components/forms/lead/oportunidade/LeadOportunidadeUpdateForm";
import { RepresentanteQueryProvider } from "@/app/_components/queryProviders/RepresentanteQueryProvider";
import { LeadOportunidade } from "@/app/_types/lead/oportunidade/Oportunidade";
import { Container } from "@mui/material";

type PageParams = {
  oportunidadeId: LeadOportunidade["id"];
  leadId: string;
};

const BFF_URL = process.env.BFF_URL;

const getOportunidadeById = async (
  leadId: string,
  id: LeadOportunidade["id"]
) => {
  try {
    const res = await fetch(`${BFF_URL}/leads/${leadId}/oportunidades/${id}`);
    if (!res.ok) throw new Error("Erro ao buscar oportunidade");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Page({ params }: { params: PageParams }) {
  const { oportunidadeId, leadId } = params;
  const oportunidade = await getOportunidadeById(leadId, oportunidadeId);
  return (
    <RepresentanteQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <LeadUpdateOportunidadeForm
          leadId={leadId}
          oportunidade={oportunidade}
        />
      </Container>
    </RepresentanteQueryProvider>
  );
}
