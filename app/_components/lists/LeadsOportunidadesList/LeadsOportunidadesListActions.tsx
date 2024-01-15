"use client";

import { Grid, IconButton, Tooltip } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { OportunidadeEtapa } from "@/app/_types/_enums/OportunidadeEtapa";
import { LeadOportunidade } from "@/app/_types/prospeccao/oportunidade/Oportunidade";

type LeadsOportunidadesListActionsProps = {
  oportunidade: LeadOportunidade;
  onClickAttachment?: () => void;
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
  const { oportunidade, onClickAttachment } = props;
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

  return (
    <Grid container>
      <Grid item>
        <Tooltip title="Anexos">
          <IconButton onClick={onClickAttachment}>
            <AttachmentIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Link
          href={`/prospeccoes/${clienteProspeccaoId}/oportunidades/${id}`}
          passHref
        >
          <Tooltip title="Editar">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Tooltip title="Excluir">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid item>
        <Tooltip title="Encerrar oportunidade">
          <IconButton
            onClick={() => _encerrarOportunidade(oportunidade)}
            disabled={oportunidade.etapa === OportunidadeEtapa.PERDIDO}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Reabrir oportunidade">
          <IconButton
            onClick={() => _reabrirOportunidade(oportunidade)}
            disabled={oportunidade.etapa !== OportunidadeEtapa.PERDIDO}
          >
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
