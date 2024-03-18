"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { OportunidadesCardList } from "./OportunidadesCardList";
import { Oportunidade } from "@/src/types/Oportunidade";
import { AttachmentsModal } from "./AttachmentsModal";

type OportunidadesListProps = {
  oportunidades: Oportunidade[];
};

const orderOportunidades = (oportunidades: Oportunidade[]) => {
  return oportunidades.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function OportunidadesList(props: OportunidadesListProps) {
  const { oportunidades } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const content = oportunidades.length ? (
    <OportunidadesCardList
      oportunidades={orderOportunidades(oportunidades)}
      handleModalOpen={handleModalOpen}
    />
  ) : (
    <Typography>Nenhuma oportunidade cadastrada</Typography>
  );

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        spacing={2}
      >
        <Grid item>
          <Link href={"oportunidades/novo"} passHref>
            <Button variant={"contained"}>Nova oportunidade</Button>
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            width: "100%",
          }}
        >
          {content}
        </Grid>
      </Grid>
      <AttachmentsModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
