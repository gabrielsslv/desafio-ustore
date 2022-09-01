export interface RequestCreate {
  id: number;
  nome: string;
  preco: number;
  validade?: Date;
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
