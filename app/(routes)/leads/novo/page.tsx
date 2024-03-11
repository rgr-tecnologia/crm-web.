import { Container } from "@mui/material";
import { CreateLeadForm } from "@/src/components/forms/lead/CreateLeadForm";

export default function Page() {
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <CreateLeadForm />
    </Container>
  );
}
