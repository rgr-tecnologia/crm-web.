import { Oportunidade } from "@/src/types/cliente/oportunidade/Oportunidade";
import { OportunidadeEtapa } from "@/src/types/enums/OportunidadeEtapa";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export async function encerrarOportunidade(oportunidade: Oportunidade) {
  try {
    const { clienteId, id } = oportunidade;
    const urlToFetch = `${BFF_URL}/prospeccoes/${clienteId}/oportunidades/${id}`;

    const data = {
      ...oportunidade,
      etapa: OportunidadeEtapa.PERDIDO,
    };

    const response = await fetch(urlToFetch, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro ao encerrar oportunidade");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Erro ao encerrar oportunidade");
    }
  }
}
