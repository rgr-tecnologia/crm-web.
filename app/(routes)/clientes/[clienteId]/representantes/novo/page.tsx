import { CreateRepresentanteForm } from "@/app/_components/forms/representante/CreateRepresentanteForm";
import { Container, Grid } from "@mui/material";

type Params = {
  clienteId: string;
};

export default function Page({ params }: { params: Params }) {
  const { clienteId } = params;
  return (
    <>
      <Container
        sx={{
          marginTop: 2,
        }}
      >
        <CreateRepresentanteForm clienteId={clienteId} />
      </Container>
    </>
  );
}
