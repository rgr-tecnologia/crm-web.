import { CreateContratoForm } from "@/app/_components/forms/contrato/CreateContratoForm";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <CreateContratoForm clienteId={clienteId} />
    </Container>
  );
}
