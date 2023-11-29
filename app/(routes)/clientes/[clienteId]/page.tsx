import { ClienteQueryProvider } from "@/app/_components/forms/cliente/ClientQueryProvider";
import { UpdateClienteForm } from "@/app/_components/forms/cliente/UpdateClienteForm";

type PageParams = {
  clienteId: string;
};

export default async function Page({ params }: { params: PageParams }) {
  return (
    <ClienteQueryProvider>
      <UpdateClienteForm clienteId={params.clienteId} />
    </ClienteQueryProvider>
  );
}
