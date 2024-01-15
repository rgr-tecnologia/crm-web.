import { ProspeccoesList } from "@/app/_components/lists/prospeccoes/ProspeccoesList";
import { fetchErrorHandler } from "@/app/_lib/errors/fetchErrorHandler";
import { Prospeccao } from "@/app/_types/prospeccao/Prospeccao";
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
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <ProspeccoesList prospeccoes={prospeccoes || []} />
    </Container>
  );
}