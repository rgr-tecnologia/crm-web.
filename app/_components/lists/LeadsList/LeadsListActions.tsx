"use client";

import { Lead } from "@/app/_types/lead/Lead";
import {
  Grid,
  Button,
  Link,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

type LeadsListActionsProps = {
  lead: Lead;
};

export function LeadsListActions(props: LeadsListActionsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { lead } = props;
  const { id } = lead;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Button variant="outlined" onClick={handleClick}>
        Ações
      </Button>
      <Menu onClose={handleClose} anchorEl={anchorEl} open={open}>
        <MenuItem>
          <Link href={`leads/${id}`}>
            <Button variant="text">Ver detalhes</Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href={`leads/${id}/oportunidades`}>
            <Button variant="text">Ver oportunidades</Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
