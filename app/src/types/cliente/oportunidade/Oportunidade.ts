import { AreaExecutora } from "../../enums/AreaExecutora";
import { ContratoCaracteristica } from "../../enums/ContratoCaracteristica";
import { OportunidadeEtapa } from "../../enums/OportunidadeEtapa";

export type Oportunidade = {
  id: string;
  clienteId: string;
  representanteId: string;
  titulo: string;
  caracteristica: ContratoCaracteristica;
  areaExecutora: AreaExecutora;
  dataFechamentoPrevista: Date;
  etapa: OportunidadeEtapa;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
};
