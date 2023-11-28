import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="relative">
          <Container>
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
                <Link href={"/usuarios"} passHref>
                  <Button
                    variant="text"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Usuários
                  </Button>
                </Link>
                <Link href={"/clientes"} passHref>
                  <Button
                    variant="text"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Clientes
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box>{children}</Box>
      </body>
    </html>
  );
}
