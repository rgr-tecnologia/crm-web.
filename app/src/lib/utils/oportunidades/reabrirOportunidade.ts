import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";
import { OportunidadeEtapa } from "@/src/types/enums/OportunidadeEtapa";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function reabrirOportunidade(oportunidade: Oportunidade) {
  const { clienteId, id } = oportunidade;
  try {
    const urlToFetch = `${BFF_URL}/clientes/${clienteId}/oportunidades/${id}`;
    const data = {
      ...oportunidade,
      etapa: OportunidadeEtapa.NEGOCIACAO,
    };

    const response = await fetch(urlToFetch, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro ao reabrir oportunidade");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Erro ao reabrir oportunidade");
    }
  }
}
