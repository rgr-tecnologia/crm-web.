"use client";

import { Contrato } from "@/app/_types/contrato/Contrato";
import { Button, Box, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function ContratosListActions({ contrato }: { contrato: Contrato }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={onClick}>
        Ações
      </Button>
      <Menu onClose={onClose} anchorEl={anchorEl} open={open}>
        <MenuItem>
          <Link href={`contratos/${contrato.id}`}>
            <Button variant="text">Ver detalhes</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
