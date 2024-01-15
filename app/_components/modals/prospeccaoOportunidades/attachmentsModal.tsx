"use client";

import { CloudUpload, Save } from "@mui/icons-material";
import {
  Modal,
  Typography,
  Grid,
  Button,
  styled,
  Divider,
  Box,
} from "@mui/material";

type Props = {
  isOpen: boolean;
  onClose: (state: boolean) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "0.25rem",
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function AttachmentsModal(props: Props) {
  const { isOpen, onClose } = props;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Anexos</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Nenhum arquivo anexado</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
          >
            Carregar arquivo
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item container xs={12} justifyContent={"flex-end"}>
          <Box>
            <Button component="label" variant="contained" startIcon={<Save />}>
              Salvar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}
