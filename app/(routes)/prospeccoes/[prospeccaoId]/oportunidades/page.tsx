import { OportunidadesList } from "@/(routes)/oportunidades/components/OportunidadesList";
import { LeadOportunidade } from "@/src/types/prospeccao/oportunidade/Oportunidade";
import { Container } from "@mui/material";

type Params = {
  prospeccaoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getProspeccoes(prospeccaoId: string) {
  const urlToFetch = `${BFF_URL}/prospeccoes/${prospeccaoId}/oportunidades`;
  const response = await fetch(urlToFetch, {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Page({ params }: { params: Params }) {
  const { prospeccaoId } = params;
  const oportunidades = await getProspeccoes(prospeccaoId);

  oportunidades.forEach((oportunidade: LeadOportunidade) => {
    oportunidade.createdAt = new Date(oportunidade.createdAt);
    oportunidade.updatedAt = new Date(oportunidade.updatedAt);
  });

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <OportunidadesList oportunidades={oportunidades} />
    </Container>
  );
}
