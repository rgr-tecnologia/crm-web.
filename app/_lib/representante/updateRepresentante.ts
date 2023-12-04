import { Cliente } from "@/app/_types/Cliente";
import { Representate } from "@/app/_types/representante/Representante";
import { UpdateRepresentante } from "@/app/_types/representante/UpdateRepresentante";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const updateRepresentante = async (
  clienteId: Cliente["id"],
  representanteId: Representate["id"],
  formData: UpdateRepresentante
) => {
  const response = await fetch(
    `${BFF_URL}/clientes/${clienteId}/representantes/${representanteId}`,
    {
      method: "PUT",
      body: JSON.stringify(formData),
    }
  );
  const data: Representate = await response.json();
  return data;
};
