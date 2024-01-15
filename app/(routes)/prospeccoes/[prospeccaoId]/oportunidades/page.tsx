import { LeadsOportunidadesList } from "@/app/_components/lists/LeadsOportunidadesList/LeadsOportunidadesList";
import { LeadOportunidade } from "@/app/_types/prospeccao/oportunidade/Oportunidade";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

type Params = {
  prospeccaoId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getProspeccoes(prospeccaoId: string) {
  const urlToFetch = `${BFF_URL}/prospeccoes/${prospeccaoId}/oportunidades`;
  const response = await fetch(urlToFetch);
  return response.json();
}

export default async function Page({ params }: { params: Params }) {
  const { prospeccaoId } = params;
  const oportunidades = await getProspeccoes(prospeccaoId);

  oportunidades.forEach((oportunidade: LeadOportunidade) => {
    oportunidade.createdAt = new Date(oportunidade.createdAt);
    oportunidade.updatedAt = new Date(oportunidade.updatedAt);
  });

  const content = oportunidades.length ? (
    <LeadsOportunidadesList oportunidades={oportunidades} />
  ) : (
    <Typography>Nenhuma oportunidade cadastrada</Typography>
  );

  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid item>
          <Link href={"oportunidades/novo"} passHref>
            <Button variant={"contained"}>Nova oportunidade</Button>
          </Link>
        </Grid>
        <Grid
          item
          container
          sx={{
            width: "100%",
          }}
          spacing={2}
          direction={"column"}
        >
          {content}
        </Grid>
      </Grid>
    </Container>
  );
}
