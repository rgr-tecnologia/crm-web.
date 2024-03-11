import { fetchErrorHandler } from "@/src/lib/errors/fetchErrorHandler";
import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";
import { Container } from "@mui/material";

type Params = {
  prospeccaoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getProspeccao(prospeccaoId: string) {
  try {
    const response = await fetch(`${BFF_URL}/prospeccoes/${prospeccaoId}`);
    if (!response.ok) {
      throw new Error("Erro ao consultar prospecção");
    }
    const data: Prospeccao = await response.json();
    return data;
  } catch (error) {
    fetchErrorHandler(error);
  }
}

export default async function Page({ params }: { params: Params }) {
  const { prospeccaoId } = params;

  const prospeccao = await getProspeccao(prospeccaoId);

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    ></Container>
  );
}
