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
import { encerrarOportunidade } from "@/src/lib/utils/oportunidades/encerrarOportunidade";
import { reabrirOportunidade } from "@/src/lib/utils/oportunidades/reabrirOportunidade";

type OportunidadesListActionsProps = {
  oportunidade: Oportunidade;
  onClickAttachment?: () => void;
};

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
