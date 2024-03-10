"use client";
import { Button, Grid, Typography } from "@mui/material";
import { LeadOportunidade } from "@/app/_types/prospeccao/oportunidade/Oportunidade";
import { AttachmentsModal } from "../../modals/prospeccaoOportunidades/attachmentsModal";
import { useState } from "react";
import Link from "next/link";
import { LeadsOportunidadesCardList } from "./LeadsOportunidadesCardList";

type OportunidadesListProps = {
  oportunidades: LeadOportunidade[];
};

const orderLeadOportunidades = (oportunidades: LeadOportunidade[]) => {
  return oportunidades.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return aDate.getTime() - bDate.getTime();
  });
};

export function LeadsOportunidadesList(props: OportunidadesListProps) {
  const { oportunidades } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const content = oportunidades.length ? (
    <LeadsOportunidadesCardList
      oportunidades={orderLeadOportunidades(oportunidades)}
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
