import { AreaExecutora } from "../../_enums/AreaExecutora";
import { ContratoCaracteristica } from "../../_enums/ContratoCaracteristica";
import { OportunidadeEtapa } from "../../_enums/OportunidadeEtapa";

export type LeadOportunidade = {
  id: string;
  clienteProspeccaoId: string;
  representanteProspeccaoId: string;
  titulo: string;
  caracteristica: ContratoCaracteristica;
  areaExecutora: AreaExecutora;
  dataFechamentoPrevista: Date;
  etapa: OportunidadeEtapa;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
};
