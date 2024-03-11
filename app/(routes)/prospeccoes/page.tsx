import { ProspeccoesList } from "@/src/components/lists/prospeccoes/ProspeccoesList";
import { LeadQueryProvider } from "@/src/components/queryProviders/LeadQueryProvider";
import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";
import { Container, Typography } from "@mui/material";

const BFF_URL = process.env.BFF_URL;

async function getProspeccoes() {
  try {
    const url = `${BFF_URL}/prospeccoes`;
    const response = await fetch(url, {
      next: {
        revalidate: 0,
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar prospecções");
    }

    const data: Prospeccao[] = await response.json();
    return data;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export default async function page() {
  const prospeccoes = await getProspeccoes();

  prospeccoes?.forEach((prospeccao) => {
    prospeccao.updatedAt = new Date(prospeccao.updatedAt);
    prospeccao.createdAt = new Date(prospeccao.createdAt);
  });

  return (
    <LeadQueryProvider>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <ProspeccoesList prospeccoes={prospeccoes || []} />
      </Container>
    </LeadQueryProvider>
  );
}
