"use client";

import { OportunidadeEtapa } from "@/app/_types/_enums/OportunidadeEtapa";
import { LeadOportunidade } from "@/app/_types/lead/oportunidade/Oportunidade";
import { Grid, Button, Typography, MenuItem, Menu, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type OportunidadesListActionsProps = {
  oportunidade: LeadOportunidade;
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export function OportunidadesListActions(props: OportunidadesListActionsProps) {
  const { oportunidade } = props;
  const { id, leadId } = oportunidade;
  const router = useRouter();

  async function encerrarOportunidade(oportunidade: LeadOportunidade) {
    try {
      const urlToFetch = `${BFF_URL}/leads/${oportunidade.leadId}/oportunidades/${oportunidade.id}`;
      const data = {
        ...oportunidade,
        etapa: OportunidadeEtapa.PERDIDO,
      };

      const response = await fetch(urlToFetch, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.refresh();
        window.location.reload();
        return response.json();
      } else {
        throw new Error("Erro ao encerrar oportunidade");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro ao encerrar oportunidade");
      }
    }
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClick}>
        Ações
      </Button>
      <Menu onClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem>
          <Link href={`/leads/${leadId}/oportunidades/${id}`}>
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
        {oportunidade.etapa !== OportunidadeEtapa.PERDIDO && (
          <>
            <MenuItem onClick={() => encerrarOportunidade(oportunidade)}>
              Encerrar oportunidade
            </MenuItem>
            <MenuItem>
              <Link
                href={`/leads/${leadId}/oportunidades/${id}/gerar-contrato`}
              >
                <Button variant="text">Gerar contrato</Button>
              </Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}
