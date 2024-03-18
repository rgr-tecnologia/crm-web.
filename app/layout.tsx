import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { Layout } from "./src/components/ui/Layout";

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
          <Layout>{children}</Layout>
        </body>
      </UserProvider>
    </html>
  );
}
