import { Box, Container, CssBaseline } from "@mui/material";
import { Header } from "@/src/components/ui/Header/Header";
import { SideMenu } from "@/src/components/ui/SideMenu/SideMenu";

import { getSession } from "@auth0/nextjs-auth0";

type LayoutProps = {
  children: React.ReactNode;
};

export async function Layout({ children }: LayoutProps) {
  const session = await getSession();
  if (!session) {
    return <Container>Unauthorized</Container>;
  }

  const { user } = session;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header profile={user} />
      <SideMenu />

      <Box component={"main"} sx={{ flexGrow: 1, p: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
