import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "@/src/components/Header/Header";
import { SideMenu } from "@/src/components/SideMenu/SideMenu";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
      <UserProvider>
        <body className={inter.className}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />
            <SideMenu />

            <Box component={"main"} sx={{ flexGrow: 1, p: 8 }}>
              {children}
            </Box>
          </Box>
        </body>
      </UserProvider>
    </html>
  );
}
