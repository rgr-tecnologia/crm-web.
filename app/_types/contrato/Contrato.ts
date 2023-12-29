export type Contrato = {
  id: string;
  clienteId: string;
  titulo: string;
  caracteristica: string;
  dataInicio: Date;
  dataFimPrevista: Date;
  valor: number;
  representanteId: string;
  ativo: boolean;
};
