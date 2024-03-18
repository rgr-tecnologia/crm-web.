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
import { Oportunidade } from "@/src/types/Oportunidade";
import {
  encerrarOportunidade,
  reabrirOportunidade,
  updateOportunidade,
} from "../actions";
import { useState } from "react";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";

type OportunidadesListActionsProps = {
  oportunidade: Oportunidade;
  onClickAttachment?: () => void;
};

export function OportunidadesListActions(props: OportunidadesListActionsProps) {
  const { oportunidade, onClickAttachment } = props;
  const { id, clienteId } = oportunidade;
  const router = useRouter();

  const [errors, setErrors] = useState<Error[]>([]);

  const _encerrarOportunidade = async (oportunidade: Oportunidade) => {
    try {
      const res = await encerrarOportunidade(oportunidade.id);
      if (res) {
        router.refresh();
      }
    } catch (error) {
      setErrors([...errors, Error("Erro ao encerrar oportunidade!")]);
    }
  };

  const _reabrirOportunidade = async (oportunidade: Oportunidade) => {
    try {
      const res = await reabrirOportunidade(oportunidade.id);
      if (res) {
        router.refresh();
      }
    } catch (error) {
      setErrors([...errors, Error("Erro ao reabrir oportunidade!")]);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item>
          <Tooltip title="Anexos">
            <IconButton onClick={onClickAttachment}>
              <AttachmentIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Link href={`/oportunidades/${id}`} passHref>
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
              disabled={oportunidade.etapa !== OportunidadeEtapa.NEGOCIACAO}
              href={`oportunidades/${id}/gerar-contrato`}
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
      {Boolean(errors.length) && (
        <ErrorNotification
          message={errors[0].message}
          open={Boolean(errors.length)}
          onClose={() => setErrors([])}
        />
      )}
    </>
  );
}
