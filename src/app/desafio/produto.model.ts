export interface Produto {
  id: number;
  nome: string;
  validade: Date;
}

export interface RequestCreate {
  id: number;
  nome: string;
  preco: number;
  validade: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface ResponseCreate {
  id: number;
  nome: string;
  preco: number;
  validade?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface RequestUpdate {
  //id: string;
  nome: string;
  preco: number;
  validade: Date;
}

export interface ResponseUpdate {
  data: Produto;
}
