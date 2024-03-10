export type Contrato = {
  id: string;
  clienteId: string;
  oportunidadeId: string;
  representanteId: string;
  titulo: string;
  caracteristica: string;
  dataInicio: Date;
  dataFimPrevista: Date;
  valor: number;
  ativo: boolean;
  dataPagamento: Date;
  renovarAutomaticamente: boolean;
  numeroParcelas: number;
  createdAt: Date;
  updatedAt: Date;
};
