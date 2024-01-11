"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const options = {
  leads: {
    name: "Leads",
    path: "/leads",
    icon: <></>,
  },
  clientes: {
    name: "Clientes",
    path: "/clientes",
    icon: <></>,
  },
  usuarios: {
    name: "Usuários",
    path: "/usuarios",
    icon: <PersonIcon />,
  },
  calculadora: {
    name: "Calculadora",
    path: "/calculadora",
    icon: <AttachMoneyIcon />,
  },
};

export function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {Object.values(options).map((option) => (
            <ListItemButton href={option.path} LinkComponent={Link}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
