"use client";
import { Claims } from "@auth0/nextjs-auth0";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

type ProfileProps = {
  profile: Claims;
};

export function Profile(props: ProfileProps) {
  const { profile } = props;
  const { picture } = profile;

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
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <Avatar src={picture} />
      </IconButton>
      <Menu onClose={handleClose} anchorEl={anchorEl} open={open}>
        <List>
          <ListItemButton href="/preferencias">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Preferências" />
          </ListItemButton>
          <ListItemButton href="/api/auth/logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Menu>
    </Box>
  );
}
