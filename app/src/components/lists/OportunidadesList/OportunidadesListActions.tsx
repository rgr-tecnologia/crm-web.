"use client";

import { Grid, IconButton, Tooltip } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { OportunidadeEtapa } from "@/src/types/enums/OportunidadeEtapa";
import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";

type OportunidadesListActionsProps = {
  oportunidade: Oportunidade;
  onClickAttachment?: () => void;
};

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

async function encerrarOportunidade(oportunidade: Oportunidade) {
  try {
    const { clienteId, id } = oportunidade;
    const urlToFetch = `${BFF_URL}/prospeccoes/${clienteId}/oportunidades/${id}`;

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

async function reabrirOportunidade(oportunidade: Oportunidade) {
  const { clienteId, id } = oportunidade;
  try {
    const urlToFetch = `${BFF_URL}/clientes/${clienteId}/oportunidades/${id}`;
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

export function OportunidadesListActions(props: OportunidadesListActionsProps) {
  const { oportunidade, onClickAttachment } = props;
  const { id, clienteId } = oportunidade;
  const router = useRouter();

  const _encerrarOportunidade = async (oportunidade: Oportunidade) => {
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

  const _reabrirOportunidade = async (oportunidade: Oportunidade) => {
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
        <Link href={`/clientes/${clienteId}/oportunidades/${id}`} passHref>
          <Tooltip title="Editar">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </Grid>
      <Grid item>
        <Tooltip title="Gerar contrato">
          <IconButton
            disabled={oportunidade.etapa === OportunidadeEtapa.NEGOCIACAO}
            href={`/prospeccoes/${clienteId}/oportunidades/${id}/gerar-contrato`}
          >
            <DescriptionIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Encerrar oportunidade">
          <IconButton
            onClick={() => _encerrarOportunidade(oportunidade)}
            disabled={!(oportunidade.etapa === OportunidadeEtapa.NEGOCIACAO)}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Reabrir oportunidade">
          <IconButton
            onClick={() => _reabrirOportunidade(oportunidade)}
            disabled={!(oportunidade.etapa === OportunidadeEtapa.PERDIDO)}
          >
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Excluir">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
