import { ClienteQueryProvider } from "@/app/_components/forms/cliente/ClientQueryProvider";
import { CreateClienteForm } from "@/app/_components/forms/cliente/CreateClienteForm";

export default function Page() {
  return (
    <ClienteQueryProvider>
      <CreateClienteForm />
    </ClienteQueryProvider>
  );
}
