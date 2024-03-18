import { UpdateRepresentanteForm } from "@/src/components/forms/representante/UpdateRepresentanteForm";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
  representanteId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId, representanteId } = params;
  return (
    <Container
      sx={{
        marginTop: 2,
      }}
    >
      <UpdateRepresentanteForm
        clienteId={params.clienteId}
        representanteId={representanteId}
      />
    </Container>
  );
}
