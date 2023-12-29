import { OportunidadeCreateForm } from "@/app/_components/forms/oportunidade/OportunidadeCreateForm";
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
      <OportunidadeCreateForm clienteId={clienteId} />
    </Container>
  );
}
