"use client";
import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

type ProspeccoesListActionsProps = {
  prospeccao: Prospeccao;
};

export function ProspeccoesListActions(props: ProspeccoesListActionsProps) {
  const { prospeccao } = props;

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
          <Link href={`prospeccoes/${prospeccao.id}`}>
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`prospeccoes/${prospeccao.id}/oportunidades`}>
            <Button variant="text">Oportunidades</Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`prospeccoes/${prospeccao.id}/representantes`}>
            <Button variant="text">Representantes</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
