import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, Container, CssBaseline } from "@mui/material";
import { Header } from "@/src/components/ui/Header/Header";
import { SideMenu } from "@/src/components/ui/SideMenu/SideMenu";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Suspense } from "react";

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
              <Suspense fallback={<Container>Loading...</Container>}>
                {children}
              </Suspense>
            </Box>
          </Box>
        </body>
      </UserProvider>
    </html>
  );
}
