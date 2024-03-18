"use client";
import { Filial } from "@/src/types/Filial";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

type FilialListActionsProps = {
  filial: Filial;
};

export function FilialListActions(props: FilialListActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { filial } = props;

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
          <Link href={`filiais/${filial.id}`}>
            <Button variant="text">Detalhes</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
