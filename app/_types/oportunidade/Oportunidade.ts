import { OportunidadeEtapa } from "../_enums/OportunidadeEtapa";

export type Oportunidade = {
  id: string;
  titulo: string;
  clienteId: string;
  representanteId: string;
  etapa: OportunidadeEtapa;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
};
