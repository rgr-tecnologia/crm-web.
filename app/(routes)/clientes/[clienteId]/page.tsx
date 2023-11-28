import { ClienteForm } from "@/app/_components/forms/ClienteForm";

type PageParams = {
  clienteId: string;
};

const BFF_URL = process.env.BFF_URL;

async function getCliente(clienteId: string) {
  const res = await fetch(`${BFF_URL}/clientes/${clienteId}`);
  const cliente = await res.json();

  return cliente;
}

export default async function Page({ params }: { params: PageParams }) {
  const cliente = await getCliente(params.clienteId);

  return <ClienteForm cliente={cliente} />;
}
