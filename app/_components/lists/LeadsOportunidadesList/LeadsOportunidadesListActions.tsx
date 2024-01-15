"use client";

import { OportunidadeEtapa } from "@/app/_types/_enums/OportunidadeEtapa";
import { LeadOportunidade } from "@/app/_types/prospeccao/oportunidade/Oportunidade";
import { Button, MenuItem, Menu, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LeadsOportunidadesListActionsProps = {
  oportunidade: LeadOportunidade;
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

async function encerrarOportunidade(oportunidade: LeadOportunidade) {
  try {
    const urlToFetch = `${BFF_URL}/prospeccoes/${oportunidade.clienteProspeccaoId}/oportunidades/${oportunidade.id}`;
    const data = {
      ...oportunidade,
      etapa: OportunidadeEtapa.PERDIDO,
    };

    const response = await fetch(urlToFetch, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response.ok) {
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

async function reabrirOportunidade(oportunidade: LeadOportunidade) {
  try {
    const urlToFetch = `${BFF_URL}/prospeccoes/${oportunidade.clienteProspeccaoId}/oportunidades/${oportunidade.id}`;
    const data = {
      ...oportunidade,
      etapa: OportunidadeEtapa.NEGOCIACAO,
    };

    const response = await fetch(urlToFetch, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro ao reabrir oportunidade");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Erro ao reabrir oportunidade");
    }
  }
}

export function LeadsOportunidadesListActions(
  props: LeadsOportunidadesListActionsProps
) {
  const { oportunidade } = props;
  const { id, clienteProspeccaoId } = oportunidade;
  const router = useRouter();

  const _encerrarOportunidade = async (oportunidade: LeadOportunidade) => {
    try {
      const res = await encerrarOportunidade(oportunidade);
      if (res) {
        router.refresh();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _reabrirOportunidade = async (oportunidade: LeadOportunidade) => {
    try {
      const res = await reabrirOportunidade(oportunidade);
      if (res) {
        router.refresh();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <Link
            href={`/prospeccoes/${clienteProspeccaoId}/oportunidades/${id}`}
          >
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
        {oportunidade.etapa !== OportunidadeEtapa.PERDIDO && (
          <>
            <MenuItem onClick={() => _encerrarOportunidade(oportunidade)}>
              Encerrar oportunidade
            </MenuItem>
          </>
        )}

        {oportunidade.etapa === OportunidadeEtapa.PERDIDO && (
          <>
            <MenuItem onClick={() => _reabrirOportunidade(oportunidade)}>
              Reabrir oportunidade
            </MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
}
