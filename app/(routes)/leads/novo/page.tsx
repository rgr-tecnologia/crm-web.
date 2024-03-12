import { Container } from "@mui/material";
import { CreateLeadForm } from "@/src/components/forms/lead/CreateLeadForm";
import { ClienteQueryProvider } from "@/src/components/queryProviders/ClienteQueryProvider";

export default function Page() {
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <ClienteQueryProvider>
        <CreateLeadForm />
      </ClienteQueryProvider>
    </Container>
  );
}
