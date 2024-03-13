import { fetchErrorHandler } from "../../errors/fetchErrorHandler";
import { RepresentanteProspeccao } from "@/src/types/prospeccao/representante/RepresentanteProspeccao";

const BFF_URL = process.env.NEXT_PUBLIC_BFF_URL;

export const getRepresentantesProspeccao = async (
  filter: Partial<RepresentanteProspeccao>
) => {
  const url = `${BFF_URL}/prospeccoes/${filter.clienteProspeccaoId}/representantes`;
  try {
    const res = await fetch(url);
    const representantes: RepresentanteProspeccao[] = await res.json();

    return representantes;
  } catch (err) {
    fetchErrorHandler(err);
  }
};
