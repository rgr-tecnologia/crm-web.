import { CreateClienteForm } from "@/(routes)/clientes/components/CreateClienteForm";
import { Container } from "@mui/material";

export default function Page() {
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <CreateClienteForm />
    </Container>
  );
}
