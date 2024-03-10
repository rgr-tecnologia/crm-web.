import { RepresentateEndereco } from "../../RepresentanteEndereco";

export type RepresentanteProspeccao = {
  id: string;
  clienteProspeccaoId: string;
  nome: string;
  departamento: string;
  cargo: string;
  dataNascimento: Date;
  email: string;
  telefone: string;
  endereco?: RepresentateEndereco;
  ativo: boolean;
  createdAt: Date;
  updatedAt: Date;
};
