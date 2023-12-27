import { RepresentateEndereco } from "../RepresentanteEndereco";

export type Representate = {
  id: string;
  clienteId: string;
  nome: string;
  departamento: string;
  cargo: string;
  dataNascimento: Date;
  email: string;
  telefone: string;
  endereco: RepresentateEndereco;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};
