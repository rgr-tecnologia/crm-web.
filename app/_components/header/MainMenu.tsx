import { Box, Button, Toolbar } from "@mui/material";
import Link from "next/link";

export function MainMenu() {
  return (
    <Toolbar>
      <Box>
        <Link href={"/"} passHref>
          <Button
            variant="text"
            sx={{
              color: "#fff",
            }}
          >
            Home
          </Button>
        </Link>

        <Link href={"/leads"} passHref={true}>
          <Button
            variant="text"
            sx={{
              color: "#fff",
            }}
          >
            Leads
          </Button>
        </Link>

        <Link href={"/clientes"} passHref={true}>
          <Button
            variant="text"
            sx={{
              color: "#fff",
            }}
          >
            Clientes
          </Button>
        </Link>
        <Link href={"/usuarios"} passHref={true}>
          <Button
            variant="text"
            sx={{
              color: "#fff",
            }}
          >
            Usuários
          </Button>
          <Link href={"/calculadora"} passHref={true}>
            <Button
              variant="text"
              sx={{
                color: "#fff",
              }}
            >
              Calculadora
            </Button>
          </Link>
        </Link>
      </Box>
    </Toolbar>
  );
}
