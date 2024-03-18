"use client";
import { Contrato } from "@/src/types/Contrato";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

type ContratoListActionsProps = {
  contrato: Contrato;
};

export function ContratoListActions(props: ContratoListActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { contrato } = props;

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
          <Link href={`contratos/${contrato.id}`}>
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
