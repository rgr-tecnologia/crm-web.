import { OportunidadeCreateForm } from "@/app/_components/forms/oportunidade/OportunidadeCreateForm";
import { OportunidadeCreate } from "@/app/_types/oportunidade/OportunidadeCreate";
import { Container } from "@mui/material";

type PageParams = {
  clienteId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { clienteId } = params;
  return (
    <Container>
      <OportunidadeCreateForm clienteId={clienteId} />
    </Container>
  );
}
