import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
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
      <AppBar position="relative">
        <Container>
          <Toolbar>
            <Box>
              <Button>
                <Link href={"/"}>Home</Link>
              </Button>
              <Button>
                <Link href={"/users"}>Users</Link>
              </Button>
              <Button>
                <Link href={"/customers"}>Clientes</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <body className={inter.className}>
        <Box>{children}</Box>
      </body>
    </html>
  );
}
